import TourDetailScreen from "./app/screens/TourDetailScreen";
import TOURS from "./app/config/TOURS";

export default function App() {
  return <TourDetailScreen tour={TOURS[3]} />;
}
