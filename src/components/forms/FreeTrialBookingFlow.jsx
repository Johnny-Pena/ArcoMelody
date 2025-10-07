import { useState } from 'react';

export default function FreeTrialBookingFlow({ selectedInstrument = null, onSuccess = null }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Step 1: Instrument & Teacher Selection
    instrument: selectedInstrument || '',
    teacher: '',
    teacherSelected: false, // Track if teacher has been explicitly selected
    
    // Step 2: Date & Time Selection  
    selectedDate: '',
    selectedTime: '',
    meetFormat: '',
    
    // Step 3: Contact & Student Details
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    studentFirstName: '',
    studentLastName: '',
    studentAge: '',
    experience: '',
    genres: [],
    hearAboutUs: '',
    agreesToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);

  // Teacher data with instruments and photos - Scalable for multiple teachers per instrument
  const teachers = {
    jenny: {
      id: 'jenny',
      name: 'Jenny Peña',
      instruments: ['violin', 'viola'],
      photo: '/images/jenny-256.webp',
      bio: 'Experienced violin and viola instructor specializing in classical and contemporary styles',
      specialties: ['Classical', 'Contemporary', 'Beginner-friendly'],
      yearsExperience: 8,
      email: 'jennypena@arcomelody.com'
    },
    johnny: {
      id: 'johnny',
      name: 'Johnny Peña', 
      instruments: ['guitar', 'ukulele'],
      photo: '/images/johnny-pena-headshot.jpg',
      bio: 'Professional guitar and ukulele teacher with expertise in multiple genres',
      specialties: ['Classical', 'Rock', 'Blues', 'Jazz'],
      yearsExperience: 12,
      email: 'jpenaguitarist@gmail.com'
    }
    // Future teachers can be added here:
    // maria: {
    //   id: 'maria',
    //   name: 'Maria Rodriguez',
    //   instruments: ['violin', 'guitar'],
    //   photo: '/images/maria-teacher.jpg',
    //   bio: 'Bilingual instructor specializing in Mariachi and traditional music',
    //   specialties: ['Mariachi', 'Traditional', 'Bilingual instruction'],
    //   yearsExperience: 6,
    //   email: 'maria@arcomelody.com'
    // }
  };

  // Genre options
  const genreOptions = [
    'Classical', 'Mariachi', 'Jazz', 'Movie Music', 
    'Video Game Music', 'Rock', 'Blues', 'Metal'
  ];

  // Get all teachers who teach a specific instrument
  const getTeachersForInstrument = (instrument) => {
    return Object.values(teachers).filter(teacher => 
      teacher.instruments.includes(instrument)
    );
  };

  // Get single teacher (for backward compatibility when only one teacher available)
  const getTeacherForInstrument = (instrument) => {
    const availableTeachers = getTeachersForInstrument(instrument);
    return availableTeachers.length === 1 ? availableTeachers[0] : null;
  };

  // Get currently selected teacher object
  const getSelectedTeacher = () => {
    if (formData.teacher) {
      return Object.values(teachers).find(t => t.name === formData.teacher);
    }
    return getTeacherForInstrument(formData.instrument);
  };

  // Generate available time slots for the next 14 days
  const generateAvailableSlots = (startDate = new Date()) => {
    const slots = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let dayOffset = 1; dayOffset <= 14; dayOffset++) {
      const date = new Date(today);
      date.setDate(date.getDate() + dayOffset);
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() === 0) continue;

      const dateStr = date.toISOString().split('T')[0];
      const daySlots = [];

      // Generate time slots (9 AM to 6 PM, excluding lunch 12-1)
      const timeSlots = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
        '16:00', '16:30', '17:00', '17:30'
      ];

      timeSlots.forEach(time => {
        daySlots.push({
          date: dateStr,
          time: time,
          datetime: `${dateStr}T${time}:00`,
          available: Math.random() > 0.3 // Simulate some slots being unavailable
        });
      });

      slots.push({
        date: dateStr,
        dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
        dayNumber: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        slots: daySlots
      });
    }
    return slots;
  };

  // Validation for each step
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.instrument) newErrors.instrument = 'Please select an instrument';
      
      // If multiple teachers available for selected instrument, require teacher selection
      if (formData.instrument) {
        const availableTeachers = getTeachersForInstrument(formData.instrument);
        if (availableTeachers.length > 1 && !formData.teacher) {
          newErrors.teacher = 'Please select a teacher';
        }
      }
    }
    
    if (step === 2) {
      if (!formData.selectedDate) newErrors.selectedDate = 'Please select a date';
      if (!formData.selectedTime) newErrors.selectedTime = 'Please select a time';
      if (!formData.meetFormat) newErrors.meetFormat = 'Please select a meeting format';
    }
    
    if (step === 3) {
      if (!formData.parentName) newErrors.parentName = 'Parent/Guardian name is required';
      if (!formData.parentEmail) newErrors.parentEmail = 'Email is required';
      if (!formData.parentPhone) newErrors.parentPhone = 'Phone number is required';
      if (!formData.studentAge) newErrors.studentAge = 'Student age is required';
      if (!formData.experience) newErrors.experience = 'Please select experience level';
      if (formData.genres.length === 0) newErrors.genres = 'Please select at least one genre';
      if (!formData.agreesToTerms) newErrors.agreesToTerms = 'Please agree to the terms';

      // Student name required if under 18
      const age = parseInt(formData.studentAge);
      if (age && age < 18) {
        if (!formData.studentFirstName) newErrors.studentFirstName = 'Student first name is required for minors';
        if (!formData.studentLastName) newErrors.studentLastName = 'Student last name is required for minors';
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.parentEmail && !emailRegex.test(formData.parentEmail)) {
        newErrors.parentEmail = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-assign teacher when instrument is selected (if only one available)
    if (field === 'instrument') {
      const availableTeachers = getTeachersForInstrument(value);
      const autoAssignedTeacher = availableTeachers.length === 1 ? availableTeachers[0].name : '';
      setFormData(prev => ({ 
        ...prev, 
        teacher: autoAssignedTeacher,
        // Reset teacher selection if multiple teachers available
        teacherSelected: availableTeachers.length === 1
      }));
    }
    
    // Clear error when user makes changes
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleGenreChange = (genre) => {
    setFormData(prev => ({
      ...prev,
      genres: prev.genres.includes(genre) 
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre]
    }));
    if (errors.genres) {
      setErrors(prev => ({ ...prev, genres: '' }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 1) {
        // Generate available slots when moving to step 2
        setAvailableSlots(generateAvailableSlots());
      }
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    try {
      const teacher = getSelectedTeacher();
      
      console.log('Submitting booking with data:', {
        formType: 'free_trial_booking',
        email: formData.parentEmail,
        name: formData.parentName,
        phone: formData.parentPhone,
        message: `Free Trial Booking - ${formData.instrument} lesson with ${teacher?.name}`,
        formData: {
          ...formData,
          teacherId: teacher?.id,
          teacherEmail: teacher?.email,
          scheduledDateTime: `${formData.selectedDate}T${formData.selectedTime}:00`
        }
      });
      
      // Submit to backend
      const response = await fetch('http://localhost:3002/api/tracking/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'free_trial_booking',
          email: formData.parentEmail,
          name: formData.parentName,
          phone: formData.parentPhone,
          message: `Free Trial Booking - ${formData.instrument} lesson with ${teacher?.name}`,
          formData: {
            ...formData,
            teacherId: teacher?.id,
            teacherEmail: teacher?.email,
            scheduledDateTime: `${formData.selectedDate}T${formData.selectedTime}:00`
          }
        })
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log('Backend response:', result);
        setCurrentStep(4); // Success step
        if (onSuccess) onSuccess();
      } else {
        const errorData = await response.text();
        console.error('Response error:', errorData);
        throw new Error(`Failed to submit booking: ${response.status} ${errorData}`);
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert(`Sorry, there was an error submitting your booking: ${error.message}. Please try again or call us directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsFormVisible(false);
    setCurrentStep(1);
    setFormData({
      instrument: selectedInstrument || '', teacher: '', teacherSelected: false, selectedDate: '', selectedTime: '', meetFormat: '',
      parentName: '', parentEmail: '', parentPhone: '', studentFirstName: '', studentLastName: '',
      studentAge: '', experience: '', genres: [], hearAboutUs: '', agreesToTerms: false
    });
    setErrors({});
    setAvailableSlots([]);
  };

  if (!isFormVisible) {
    return (
      <div className="text-center">
        <button 
          onClick={() => setIsFormVisible(true)}
          className="btn btn-primary btn-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <span className="text-xl mr-2">🎵</span>
          Book Your Free 20-Min Trial
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {[
            { step: 1, label: 'Choose Instrument' },
            { step: 2, label: 'Pick Date & Time' },
            { step: 3, label: 'Your Details' }
          ].map(({ step, label }) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= step 
                  ? 'bg-primary text-primary-content' 
                  : 'bg-base-300 text-base-content'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-3 ${
                  currentStep > step ? 'bg-primary' : 'bg-base-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <span className="text-sm text-base-content opacity-70">
            Step {currentStep} of 3: {
              currentStep === 1 ? 'Choose Instrument & Teacher' :
              currentStep === 2 ? 'Pick Your Preferred Date & Time' :
              'Complete Your Information'
            }
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="card bg-base-100 shadow-xl max-h-[85vh]">
        {/* Header */}
        <div className="card-body bg-primary text-primary-content rounded-t-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="card-title text-xl md:text-2xl font-bold">FREE 20-Minute Trial Lesson</h2>
              <p className="opacity-90 mt-1 text-xs md:text-sm">First Time Customers Only (Limit One Per Household)</p>
            </div>
            <button 
              onClick={resetForm}
              className="btn btn-ghost btn-sm btn-circle"
              aria-label="Close form"
            >
              ✕
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-body p-4">
          
          {/* Step 1: Instrument & Teacher Selection */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fadeIn max-h-[60vh] overflow-y-auto">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">Choose Your Instrument</h3>
                <p className="text-base-content opacity-70 text-sm">Select the instrument you'd like to learn first</p>
              </div>

              {/* Instrument Selection - Always Show */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['violin', 'viola', 'guitar', 'ukulele'].map(instrument => (
                  <label 
                    key={instrument}
                    className={`label cursor-pointer flex-col gap-2 p-3 rounded-lg border-2 transition-colors ${
                      formData.instrument === instrument 
                        ? 'border-primary bg-primary/10' 
                        : 'border-base-300 hover:border-primary/50 hover:bg-base-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="instrument"
                      value={instrument}
                      checked={formData.instrument === instrument}
                      onChange={(e) => handleInputChange('instrument', e.target.value)}
                      className="radio radio-primary radio-sm"
                    />
                    <span className="text-2xl">
                      {instrument === 'violin' || instrument === 'viola' ? '🎻' : 
                       instrument === 'guitar' ? '🎸' : '🎼'}
                    </span>
                    <span className="font-semibold capitalize text-sm">{instrument}</span>
                    <span className="text-xs opacity-70 text-center">
                      {instrument === 'violin' && 'Classical & Contemporary'}
                      {instrument === 'viola' && 'Classical & Contemporary'}
                      {instrument === 'guitar' && 'Classical & Electric'}
                      {instrument === 'ukulele' && 'All Styles'}
                    </span>
                  </label>
                ))}
              </div>

              {errors.instrument && (
                <div className="alert alert-error alert-sm">
                  <span className="text-sm">{errors.instrument}</span>
                </div>
              )}

              {/* Teacher Display - Only Show After Instrument Selected */}
              {formData.instrument && (
                <div className="mt-4 animate-fadeIn">
                  {(() => {
                    const availableTeachers = getTeachersForInstrument(formData.instrument);
                    
                    if (availableTeachers.length === 1) {
                      // Single teacher - auto-select and display
                      const teacher = availableTeachers[0];
                      return (
                        <>
                          <div className="text-center mb-3">
                            <h4 className="font-semibold text-lg">Your Teacher</h4>
                          </div>
                          <div className="card bg-base-200 shadow-md max-w-sm mx-auto">
                            <div className="card-body text-center p-4">
                              <div className="avatar mb-3">
                                <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                                  <img src={teacher.photo} alt={teacher.name} />
                                </div>
                              </div>
                              <h5 className="font-bold text-lg">{teacher.name}</h5>
                              <p className="text-xs opacity-70 mb-2">{teacher.bio}</p>
                              <div className="badge badge-primary badge-sm">
                                {formData.instrument} specialist
                              </div>
                            </div>
                          </div>
                          <div className="alert alert-success alert-sm mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm">Perfect! You'll be learning {formData.instrument} with {teacher.name}</span>
                          </div>
                        </>
                      );
                    } else if (availableTeachers.length > 1) {
                      // Multiple teachers - let client choose
                      return (
                        <>
                          <div className="text-center mb-3">
                            <h4 className="font-semibold text-lg">Choose Your Teacher</h4>
                            <p className="text-xs opacity-70">Select your preferred {formData.instrument} teacher</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                            {availableTeachers.map(teacher => (
                              <label 
                                key={teacher.id}
                                className={`card cursor-pointer transition-all duration-200 ${
                                  formData.teacher === teacher.name 
                                    ? 'ring-2 ring-primary bg-primary/10 shadow-lg' 
                                    : 'hover:shadow-lg hover:bg-base-200'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="teacher"
                                  value={teacher.name}
                                  checked={formData.teacher === teacher.name}
                                  onChange={(e) => handleInputChange('teacher', e.target.value)}
                                  className="hidden"
                                />
                                <div className="card-body p-4 text-center">
                                  <div className="avatar mb-2">
                                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                                      <img src={teacher.photo} alt={teacher.name} />
                                    </div>
                                  </div>
                                  <h5 className="font-bold text-sm">{teacher.name}</h5>
                                  <p className="text-xs opacity-70 mb-2">{teacher.bio}</p>
                                  <div className="flex flex-wrap gap-1 justify-center mb-2">
                                    {teacher.specialties.slice(0, 2).map(specialty => (
                                      <span key={specialty} className="badge badge-outline badge-xs">
                                        {specialty}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="text-xs opacity-60">
                                    {teacher.yearsExperience} years experience
                                  </div>
                                  {formData.teacher === teacher.name && (
                                    <div className="mt-2">
                                      <div className="badge badge-success badge-sm">✓ Selected</div>
                                    </div>
                                  )}
                                </div>
                              </label>
                            ))}
                          </div>
                          {formData.teacher && (
                            <div className="alert alert-success alert-sm mt-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sm">Great choice! You'll be learning {formData.instrument} with {formData.teacher}</span>
                            </div>
                          )}
                          {errors.teacher && (
                            <div className="alert alert-error alert-sm mt-3">
                              <span className="text-sm">{errors.teacher}</span>
                            </div>
                          )}
                        </>
                      );
                    }
                    return null;
                  })()}
                </div>
              )}
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-fadeIn max-h-[65vh] overflow-y-auto">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">Pick Your Preferred Date & Time</h3>
                <p className="text-base-content opacity-70 text-sm">
                  20-minute trial lesson with {getSelectedTeacher()?.name}
                </p>
              </div>

              {/* Meeting Format - Compact */}
              <div className="form-control">
                <label className="label pb-2">
                  <span className="label-text font-semibold text-sm">How would you like to meet? *</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { value: 'video', label: 'Video Call', icon: '💻' },
                    { value: 'phone', label: 'Phone Call', icon: '📞' },
                    { value: 'in-person', label: 'In-Person', icon: '🏠' }
                  ].map(format => (
                    <label 
                      key={format.value}
                      className={`label cursor-pointer gap-2 p-2 rounded-lg border transition-colors ${
                        formData.meetFormat === format.value 
                          ? 'border-primary bg-primary/10' 
                          : 'border-base-300 hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="meetFormat"
                        value={format.value}
                        checked={formData.meetFormat === format.value}
                        onChange={(e) => handleInputChange('meetFormat', e.target.value)}
                        className="radio radio-primary radio-sm"
                      />
                      <span className="text-lg">{format.icon}</span>
                      <span className="label-text text-sm">{format.label}</span>
                    </label>
                  ))}
                </div>
                {errors.meetFormat && <label className="label pt-1"><span className="label-text-alt text-error text-xs">{errors.meetFormat}</span></label>}
              </div>

              {/* Compact Calendar */}
              <div className="form-control">
                <label className="label pb-2">
                  <span className="label-text font-semibold text-sm">Select Date & Time *</span>
                </label>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {availableSlots.slice(0, 7).map(day => (
                    <div key={day.date} className="card bg-base-200 shadow-sm">
                      <div className="card-body p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="text-center">
                              <div className="text-xs opacity-70">{day.month}</div>
                              <div className="text-lg font-bold">{day.dayNumber}</div>
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{day.dayName}</div>
                              <div className="text-xs opacity-70">{day.date}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-1">
                          {day.slots.filter(slot => slot.available).slice(0, 8).map(slot => (
                            <label 
                              key={`${slot.date}-${slot.time}`}
                              className={`cursor-pointer text-center p-1 rounded text-xs border transition-colors ${
                                formData.selectedDate === slot.date && formData.selectedTime === slot.time
                                  ? 'border-primary bg-primary text-primary-content font-semibold' 
                                  : 'border-base-300 hover:border-primary hover:bg-base-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="timeSlot"
                                value={`${slot.date}-${slot.time}`}
                                checked={formData.selectedDate === slot.date && formData.selectedTime === slot.time}
                                onChange={() => {
                                  handleInputChange('selectedDate', slot.date);
                                  handleInputChange('selectedTime', slot.time);
                                }}
                                className="hidden"
                              />
                              {new Date(`2000-01-01T${slot.time}`).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true
                              })}
                            </label>
                          ))}
                          {day.slots.filter(slot => slot.available).length > 8 && (
                            <div className="text-xs opacity-70 flex items-center justify-center">+{day.slots.filter(slot => slot.available).length - 8}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {availableSlots.length > 7 && (
                    <div className="text-center text-xs opacity-70 py-2">
                      Showing first 7 days • More dates available on next step
                    </div>
                  )}
                </div>
                {(errors.selectedDate || errors.selectedTime) && (
                  <label className="label pt-1">
                    <span className="label-text-alt text-error text-xs">Please select a date and time</span>
                  </label>
                )}
              </div>

              {formData.selectedDate && formData.selectedTime && (
                <div className="alert alert-success alert-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">
                    Scheduled for {new Date(formData.selectedDate).toLocaleDateString('en-US', {
                      weekday: 'short', month: 'short', day: 'numeric'
                    })} at {new Date(`2000-01-01T${formData.selectedTime}`).toLocaleTimeString('en-US', {
                      hour: 'numeric', minute: '2-digit', hour12: true
                    })}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Contact & Student Details */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fadeIn max-h-[65vh] overflow-y-auto">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">Complete Your Information</h3>
                <p className="text-base-content opacity-70 text-sm">Just a few more details and you're all set!</p>
              </div>

              {/* Contact Information */}
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="font-semibold text-base mb-3">Contact Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-control">
                      <label className="label py-1">
                        <span className="label-text text-sm">Parent/Guardian Name *</span>
                      </label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        className={`input input-bordered input-sm ${errors.parentName ? 'input-error' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.parentName && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.parentName}</span></label>}
                    </div>

                    <div className="form-control">
                      <label className="label py-1">
                        <span className="label-text text-sm">Email Address *</span>
                      </label>
                      <input
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                        className={`input input-bordered input-sm ${errors.parentEmail ? 'input-error' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.parentEmail && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.parentEmail}</span></label>}
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text text-sm">Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.parentPhone}
                      onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                      className={`input input-bordered input-sm ${errors.parentPhone ? 'input-error' : ''}`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.parentPhone && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.parentPhone}</span></label>}
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div className="card bg-base-200 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="font-semibold text-base mb-3">Student Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="form-control">
                      <label className="label py-1">
                        <span className="label-text text-sm">Student Age *</span>
                      </label>
                      <input
                        type="number"
                        min="3"
                        max="120"
                        value={formData.studentAge}
                        onChange={(e) => handleInputChange('studentAge', e.target.value)}
                        className={`input input-bordered input-sm ${errors.studentAge ? 'input-error' : ''}`}
                        placeholder="Age"
                      />
                      {errors.studentAge && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.studentAge}</span></label>}
                    </div>

                    <div className="form-control">
                      <label className="label py-1">
                        <span className="label-text text-sm">Student First Name {parseInt(formData.studentAge) < 18 ? '*' : ''}</span>
                      </label>
                      <input
                        type="text"
                        value={formData.studentFirstName}
                        onChange={(e) => handleInputChange('studentFirstName', e.target.value)}
                        className={`input input-bordered input-sm ${errors.studentFirstName ? 'input-error' : ''}`}
                        placeholder="First name"
                      />
                      {errors.studentFirstName && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.studentFirstName}</span></label>}
                    </div>

                    <div className="form-control">
                      <label className="label py-1">
                        <span className="label-text text-sm">Student Last Name {parseInt(formData.studentAge) < 18 ? '*' : ''}</span>
                      </label>
                      <input
                        type="text"
                        value={formData.studentLastName}
                        onChange={(e) => handleInputChange('studentLastName', e.target.value)}
                        className={`input input-bordered input-sm ${errors.studentLastName ? 'input-error' : ''}`}
                        placeholder="Last name"
                      />
                      {errors.studentLastName && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.studentLastName}</span></label>}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text text-sm">Experience with {formData.instrument}? *</span>
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className={`select select-bordered select-sm ${errors.experience ? 'select-error' : ''}`}
                    >
                      <option value="">Select experience level</option>
                      <option value="complete-beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                    {errors.experience && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.experience}</span></label>}
                  </div>

                  {/* Music Genres */}
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text text-sm">What genres motivate you to learn? * (Select all that apply)</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                      {genreOptions.map((genre) => (
                        <label key={genre} className="label cursor-pointer justify-start gap-2 p-1 text-xs rounded hover:bg-base-300">
                          <input
                            type="checkbox"
                            checked={formData.genres.includes(genre)}
                            onChange={() => handleGenreChange(genre)}
                            className="checkbox checkbox-primary checkbox-xs"
                          />
                          <span className="label-text text-xs">{genre}</span>
                        </label>
                      ))}
                    </div>
                    {errors.genres && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.genres}</span></label>}
                  </div>

                  {/* How did you hear about us */}
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text text-sm">How did you hear about us? (Optional)</span>
                    </label>
                    <select
                      value={formData.hearAboutUs}
                      onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                      className="select select-bordered select-sm"
                    >
                      <option value="">Select an option</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="google">Google</option>
                      <option value="friend-family">Friend/Family</option>
                      <option value="school-music-teacher">School Music Teacher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3 p-3 border rounded-lg hover:bg-base-200">
                  <input
                    type="checkbox"
                    checked={formData.agreesToTerms}
                    onChange={(e) => handleInputChange('agreesToTerms', e.target.checked)}
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                  <span className="label-text text-sm">
                    I agree that this free trial is limited to one per household and understand that 
                    Arco Melody will contact me within 24 hours to confirm the appointment details. *
                  </span>
                </label>
                {errors.agreesToTerms && <label className="label py-1"><span className="label-text-alt text-error text-xs">{errors.agreesToTerms}</span></label>}
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStep === 4 && (
            <div className="text-center py-6 animate-fadeIn">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-2xl font-bold text-success mb-3">Booking Confirmed!</h3>
              <div className="card bg-base-200 max-w-sm mx-auto shadow-sm">
                <div className="card-body p-4">
                  <h4 className="font-semibold mb-2 text-sm">Your Trial Lesson Details:</h4>
                  <div className="text-left space-y-1 text-sm">
                    <p><strong>Instrument:</strong> {formData.instrument}</p>
                    <p><strong>Teacher:</strong> {getSelectedTeacher()?.name}</p>
                    <p><strong>Date:</strong> {new Date(formData.selectedDate).toLocaleDateString('en-US', {
                      weekday: 'short', month: 'short', day: 'numeric'
                    })}</p>
                    <p><strong>Time:</strong> {new Date(`2000-01-01T${formData.selectedTime}`).toLocaleTimeString('en-US', {
                      hour: 'numeric', minute: '2-digit', hour12: true
                    })}</p>
                    <p><strong>Format:</strong> {
                      formData.meetFormat === 'video' ? 'Video Call' :
                      formData.meetFormat === 'phone' ? 'Phone Call' : 'In-Person'
                    }</p>
                  </div>
                </div>
              </div>
              <p className="text-base-content mt-3 mb-4 text-sm px-4">
                We'll send you a confirmation email and calendar invite shortly. 
                We'll also contact you within 24 hours to confirm all the details!
              </p>
              <button 
                onClick={resetForm}
                className="btn btn-primary btn-sm"
              >
                Book Another Trial
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep <= 3 && (
            <div className="card-actions justify-between pt-6 border-t">
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline"
                  >
                    ← Previous
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-success"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Confirming Booking...
                      </>
                    ) : (
                      <>
                        📅 Confirm Booking
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}