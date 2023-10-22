import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../fireabse_setup/firebase";

const handleSubmit = (testdata:any) => {
	const ref = collection(firestore, "test_data");

	let data = {
		testData: testdata,
	};

	try {
		addDoc(ref, data);
	} catch (err) {
		console.log(err);
	}
};

export default handleSubmit;
