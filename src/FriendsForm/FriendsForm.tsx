import React from 'react';
import { FormProvider } from 'react-hook-form';
import useFriendsForm from './useFriendsForm';
import FriendsFormField from './FriendsFormField/FriendsFormField';
import styles from './FriendsForm.module.scss';

const FriendsForm = () => {
  const { handleSubmit, methods } = useFriendsForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FriendsFormField />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default FriendsForm;
