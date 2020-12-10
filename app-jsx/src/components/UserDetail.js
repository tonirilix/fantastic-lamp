import React, { useEffect, useState } from 'react'

const request = () => Promise.resolve({ data: [1,2,3], status: 200 });

function UserDetail() {
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    const handleRequestUser = async () => {
      const { data } = await request();
      setUserDetail(data);
    }

    handleRequestUser();
  }, [])

  return (
    <div>
      {userDetail.map((det) => <div>{det.anything}</div>)}
    </div>
  )
}

export default UserDetail
