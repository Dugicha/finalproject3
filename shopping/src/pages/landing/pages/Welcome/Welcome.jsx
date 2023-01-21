import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
  return (
    <div className='welcome'>
      <h3>Welcome</h3>
      <p>
        I told you all this before, when you have a swimming <Link to="/about-us">About Us</Link>, do not use chlorine, use salt water, the healing, salt water is the healing. How's business? Boomin. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. They key is to have every key, the key to open every door. You see that bamboo behind me though, you see that bamboo? Ain't nothin' like bamboo. Bless up. Egg whites, turkey sausage, wheat toast, water. Of course they don't want us to eat our breakfast, so we are going to enjoy our breakfast.
        They will try to close the door on you, just open it. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don't want you to eat. Don't ever play yourself. They don't want us to eat. The key is to enjoy life, because they don't want you to enjoy life. I promise you, they don't want you to jetski, they don't want you to smile. Egg whites, turkey sausage, wheat toast, water. Of course they don't want us to eat our breakfast, so we are going to enjoy our breakfast.
        A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm. A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm. I'm giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Lion! You see that bamboo behind me though, you see that bamboo? Ain't nothin' like bamboo. Bless up. The key to success is to keep your head above the water, never give up.
        Every chance I get, I water the plants, Lion! Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started. Learning is cool, but knowing is better, and I know the key to success. Special cloth alert. Lion! Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Special cloth alert. A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm.
      </p>
      <Link to="/auth/login">Login</Link><br />
      <Link to="/auth/signup">Sign Up</Link>
    </div>
  );
};

export default Welcome;
