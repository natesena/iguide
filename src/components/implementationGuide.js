import Initialization from "./components/initialization";
import TransactionTracking from "./components/transactionTracking";
import SkuRelease from "./components/skuRelease";
import CarouselInjection from "./components/carouselInjection";

function ImplementationGuide() {
  const [vertebraeManaged, addSkuRelease] = useState(0);
  const [vertebraeManaged, addSkuRelease] = useState(0);
  return (
    <div>
      <Initialization />
      <TransactionTracking />
      <SkuRelease />
      <CarouselInjection />
    </div>
  );
}

export default ImplementationGuide;
