import { useFieldArray, useFormContext } from 'react-hook-form';

interface FriendsFormValues {
  name: string;
  friends: { name: string }[];
}

function useFriendsFormField(prefix: string) {
  const { control, register } = useFormContext<FriendsFormValues>();

  const nameInputPath = `${prefix}name` as 'name';
  const friendsArrayInputPath = `${prefix}friends` as 'friends';

  const { fields, append, remove } = useFieldArray({
    control,
    name: friendsArrayInputPath,
  });

  const addNewFriend = () => {
    append({
      name: '',
    });
  };

  const removeFriend = (friendIndex: number) => () => {
    remove(friendIndex);
  };

  return {
    fields,
    register,
    addNewFriend,
    removeFriend,
    nameInputPath,
  };
}

export default useFriendsFormField;
