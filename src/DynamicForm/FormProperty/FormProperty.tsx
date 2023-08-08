import React, { FunctionComponent } from 'react';
import useFormProperty from './useFormProperty';
import styles from './FormProperty.module.scss';

interface Props {
  prefix?: string;
}

const FormProperty: FunctionComponent<Props> = ({ prefix = '' }) => {
  const { fields, register, addNewProperty, removeProperty } =
    useFormProperty(prefix);

  return (
    <div className={styles.wrapper}>
      <div className={styles.labelContainer}>
        <input {...register(`${prefix}label`)} placeholder="Name" />
        <button
          type="button"
          onClick={addNewProperty}
          className={styles.addPropertyButton}
        >
          + Add friend
        </button>
      </div>
      {fields.map((field, index) => (
        <div className={styles.propertyContainer}>
          <button
            type="button"
            onClick={removeProperty(index)}
            className={styles.removePropertyButton}
          >
            -
          </button>
          <FormProperty prefix={`${prefix}properties[${index}].`} />
        </div>
      ))}
    </div>
  );
};

export default FormProperty;
