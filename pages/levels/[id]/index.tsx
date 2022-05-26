import { useRouter } from "next/router";
import AcitvityDays from "components/ActivityDay";
import AcitivityImage from "components/ActivityImage";

const Acitivity = () => {
  const router = useRouter();
  const { id } = router.query;

  switch (id) {
    case "level-one":
      return <AcitivityImage />;
    case "level-two":
      return <AcitivityImage />;
    case "level-three":
      return <AcitvityDays />;

      return <>Invalid Activity</>;
  }
};

export default Acitivity;
