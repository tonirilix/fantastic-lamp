import React, { useEffect, useState } from 'react'
import { UserDto } from '../models/userDto';

interface IResponse<T> { data: T[], status: number }

function request<T>() {
  const response: IResponse<T> = { data: [], status: 200 };
  return Promise.resolve(response)
};

function UserDetail() {
  const [userDetail, setUserDetail] = useState<UserDto[]>([]);
  const [someArray, setSomeArray] = useState<string[]>();

  useEffect(() => {
    const handleRequestUser = async () => {
      const { data } = await request<UserDto>();
      setUserDetail(data);
    }

    handleRequestUser();
  }, [])
  return (
    <div>
      {userDetail.map((det) => <div>{det.lastName}</div>)}
      {someArray?.map((value) => <div>{value}</div>)}
    </div>
  )

}

export default UserDetail
