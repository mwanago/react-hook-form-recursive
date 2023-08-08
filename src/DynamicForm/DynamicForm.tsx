import React from 'react';
import { FormProvider } from 'react-hook-form';
import useDynamicForm from './useDynamicForm';
import FormProperty from './FormProperty/FormProperty';
import styles from './DynamicForm.module.scss';

const DynamicForm = () => {
  const { handleSubmit, methods } = useDynamicForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormProperty />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default DynamicForm;
