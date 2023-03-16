import Fuel from '../Routes/Fuel/Fuel';
import classes from './Home.module.css'
const Home = () => {
  return (
    <div className={classes.container}>
      <Fuel />
    </div>
  );
};

export default Home;
