import { useFocusWithin } from "@mantine/hooks";
import { useFormContext } from "react-hook-form";

const RHFNumberInput = () => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return <div>RHFNumberInput</div>;
};

export default RHFNumberInput;
