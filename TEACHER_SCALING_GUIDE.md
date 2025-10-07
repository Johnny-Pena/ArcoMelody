# Adding More Teachers - Developer Guide

## How to Add New Teachers

The booking system is designed to automatically handle multiple teachers per instrument. Here's how to add new teachers:

### 1. Add Teacher to Teachers Object

In `FreeTrialBookingFlow.jsx`, add new teachers to the `teachers` object:

```javascript
const teachers = {
  jenny: {
    id: 'jenny',
    name: 'Jenny Peña',
    instruments: ['violin', 'viola'],
    photo: '/images/jenny-256.webp',
    bio: 'Experienced violin and viola instructor specializing in classical and contemporary styles',
    specialties: ['Classical', 'Contemporary', 'Beginner-friendly'],
    yearsExperience: 8,
    email: 'jenny@arcomelody.com'
  },
  johnny: {
    id: 'johnny',
    name: 'Johnny Peña', 
    instruments: ['guitar', 'ukulele'],
    photo: '/images/johnny-pena-headshot.jpg',
    bio: 'Professional guitar and ukulele teacher with expertise in multiple genres',
    specialties: ['Classical', 'Rock', 'Blues', 'Jazz'],
    yearsExperience: 12,
    email: 'johnny@arcomelody.com'
  },
  // NEW TEACHER EXAMPLE:
  maria: {
    id: 'maria',
    name: 'Maria Rodriguez',
    instruments: ['violin', 'guitar'], // Can teach multiple instruments
    photo: '/images/maria-teacher.jpg',
    bio: 'Bilingual instructor specializing in Mariachi and traditional music',
    specialties: ['Mariachi', 'Traditional', 'Bilingual instruction'],
    yearsExperience: 6,
    email: 'maria@arcomelody.com'
  },
  carlos: {
    id: 'carlos',
    name: 'Carlos Martinez',
    instruments: ['guitar', 'ukulele'],
    photo: '/images/carlos-teacher.jpg',
    bio: 'Contemporary guitarist with focus on modern techniques and technology',
    specialties: ['Rock', 'Metal', 'Electric guitar', 'Recording'],
    yearsExperience: 10,
    email: 'carlos@arcomelody.com'
  }
};
```

### 2. What Happens Automatically

The system will automatically:

- **Single Teacher**: If only one teacher teaches an instrument, they're auto-selected
- **Multiple Teachers**: If multiple teachers teach the same instrument, a teacher selection step appears
- **Validation**: Ensures a teacher is selected when multiple options exist
- **UI Updates**: Progress flows seamlessly regardless of teacher count

### 3. Teacher Selection Scenarios

**Scenario A: Single Teacher per Instrument**
- Client selects violin → Jenny auto-assigned → Proceed to calendar

**Scenario B: Multiple Teachers per Instrument**  
- Client selects guitar → Shows Johnny and Carlos cards → Client chooses → Proceed to calendar

### 4. Required Teacher Properties

```javascript
{
  id: 'unique_identifier',           // Required: Unique ID
  name: 'Display Name',              // Required: Full name shown to clients
  instruments: ['guitar', 'violin'], // Required: Array of instruments they teach
  photo: '/images/photo.jpg',        // Required: Path to teacher photo
  bio: 'Short description...',       // Required: Brief bio (1-2 sentences)
  specialties: ['Rock', 'Jazz'],     // Required: Array of specialties/styles
  yearsExperience: 5,                // Required: Number for credibility
  email: 'teacher@arcomelody.com'    // Required: Contact email
}
```

### 5. InstrumentShowcase Integration

The `InstrumentShowcase.jsx` component will automatically work with new teachers. The teacher information shown comes from the booking flow, so no changes needed there.

### 6. Backend Considerations

When adding teachers, ensure your backend can handle:
- `teacherId` field in booking submissions
- `teacherEmail` for notifications
- Teacher-specific calendar integration

### 7. Example: Adding Piano Teacher

```javascript
sophia: {
  id: 'sophia',
  name: 'Sophia Chen',
  instruments: ['piano'], // New instrument!
  photo: '/images/sophia-piano.jpg',
  bio: 'Classical pianist and composer with conservatory training',
  specialties: ['Classical', 'Composition', 'Theory', 'Advanced technique'],
  yearsExperience: 15,
  email: 'sophia@arcomelody.com'
}
```

Don't forget to:
1. Add piano to the instrument selection in Step 1
2. Add piano emoji/icon in the instrument grid
3. Update the `instruments` array in `InstrumentShowcase.jsx`

### 8. Testing Multiple Teachers

To test the multi-teacher flow:
1. Temporarily add a second teacher for an existing instrument
2. Select that instrument in the form
3. Verify teacher selection cards appear
4. Test form validation requires teacher selection
5. Confirm booking submission includes correct teacher data

The system is fully scalable - add as many teachers as needed per instrument!