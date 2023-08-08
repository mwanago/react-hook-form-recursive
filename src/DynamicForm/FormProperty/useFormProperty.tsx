import DynamicFormProperty from '../DynamicFormProperty';
import { useFieldArray, useFormContext } from 'react-hook-form';

function useFormProperty(prefix: string) {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `${prefix}properties`,
  });

  const addNewProperty = () => {
    const newProperty: DynamicFormProperty = {
      label: '',
      properties: [],
    };

    append(newProperty);
  };

  const removeProperty = (propertyIndex: number) => () => {
    remove(propertyIndex);
  };

  return {
    fields,
    register,
    addNewProperty,
    removeProperty,
  };
}

export default useFormProperty;
