import DynamicFormProperty from './DynamicFormProperty';
import { useForm } from 'react-hook-form';

function useDynamicForm() {
  const methods = useForm<DynamicFormProperty>({
    defaultValues: {
      label: '',
      properties: [],
    },
  });

  const handleSubmit = (values: DynamicFormProperty) => {
    console.log(values);
  };

  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmit),
  };
}

export default useDynamicForm;
