import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';


const weeklyTiers = [
  {
    name: 'Weekly Hour Lessons',
    id: 'tier-hour',
    href: '/signUp',
    priceMonthly: '$279.99',
    description: 'Billed monthly',
  },
  {
    name: 'Weekly Half Hour Lessons',
    id: 'tier-half-hour',
    href: '/signUp',
    priceMonthly: '$159.99',
    description: 'Billed monthly',
  },
];

const biweeklyTiers = [
  {
    name: 'Bi-Weekly One Hour Lessons',
    id: 'tier-hour',
    href: '/signUp',
    priceMonthly: '$139.99',
    description: 'Billed monthly',
  },
  {
    name: 'Bi-Weekly Half Hour Lessons',
    id: 'tier-half-hour',
    href: '/signUp',
    priceMonthly: '$79.99',
    description: 'Billed monthly',
  },
];

export default function PricingCard() {
  const [isWeekly, setIsWeekly] = useState(true);

  const handleToggle = (e) => {
    setIsWeekly(e.target.checked);
  };

  const tiers = isWeekly ? weeklyTiers : biweeklyTiers;

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Various lesson packages available</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2 text-xl">Bi-Weekly</span>
        <input
          type="checkbox"
          className="card-bordered toggle-md toggle bg-accent"
          checked={isWeekly}
          onChange={handleToggle}
        />
        <span className="ml-2 text-xl">Weekly</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {tiers.map((tier) => (
          <div key={tier.id} className="card-bordered card bg-base-100 w-96 shadow-xl rounded-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{tier.name}</h2>
              <p className="text-3xl font-bold">{tier.priceMonthly}</p>
              <p className="text-base">{tier.description}</p>
              <div className="card-actions mt-4">
                <Link to={tier.href} className="btn btn-primary">Sign Up</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}