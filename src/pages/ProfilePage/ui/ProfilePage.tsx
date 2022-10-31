import React, { useCallback, useEffect } from 'react';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import {
  getProfileReadonly,
} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const profileData = useSelector(getProfileFormData);
  const readonly = useSelector(getProfileReadonly);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ username: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: string) => {
    dispatch(profileActions.updateData({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: string) => {
    dispatch(profileActions.updateData({ country }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateData({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((avatar?: string) => {
    dispatch(profileActions.updateData({ avatar: avatar || '' }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
       <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ProfilePageHeader />
            <ProfileCard
               profileData={profileData}
               isLoading={isLoading}
               error={error}
               readonly={readonly}
               onChangeFirstname={onChangeFirstname}
               onChangeUsername={onChangeUsername}
               onChangeCountry={onChangeCountry}
               onChangeCurrency={onChangeCurrency}
               onChangeAge={onChangeAge}
               onChangeAvatar={onChangeAvatar}
            />
       </DynamicModuleLoader>
  );
};

export default ProfilePage;
