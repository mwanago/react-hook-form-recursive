import React, { FunctionComponent } from 'react';
import styles from './FriendsFormField.module.scss';
import useFriendsFormField from './useFriendsFormField';

interface Props {
  prefix?: string;
}

const FriendsFormField: FunctionComponent<Props> = ({ prefix = '' }) => {
  const { fields, register, addNewFriend, removeFriend, nameInputPath } =
    useFriendsFormField(prefix);

  return (
    <div className={styles.wrapper}>
      <div className={styles.labelContainer}>
        <input {...register(nameInputPath)} placeholder="Name" />
        <button
          type="button"
          onClick={addNewFriend}
          className={styles.addPropertyButton}
        >
          + Add friend
        </button>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className={styles.propertyContainer}>
          <button
            type="button"
            onClick={removeFriend(index)}
            className={styles.removePropertyButton}
          >
            -
          </button>
          <FriendsFormField prefix={`${prefix}friends.${index}.`} />
        </div>
      ))}
    </div>
  );
};

export default FriendsFormField;
