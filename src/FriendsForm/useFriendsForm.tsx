import FriendsFormValues from './FriendsFormValues';
import { useForm } from 'react-hook-form';

function useFriendsForm() {
  const methods = useForm<FriendsFormValues>({
    defaultValues: {
      name: '',
      friends: [],
    },
  });

  const handleSubmit = (values: FriendsFormValues) => {
    console.log(values);
  };

  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmit),
  };
}

export default useFriendsForm;
