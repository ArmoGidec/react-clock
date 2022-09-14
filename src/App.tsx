import { RealtimeClock } from '@components/RealtimeClock';
import { TimeService } from '@services/Time';

function App() {
  const timeService = new TimeService();
  return (
    <div className="app">
      <RealtimeClock size={300} timeService={timeService} />
    </div>
  );
}

export default App;
