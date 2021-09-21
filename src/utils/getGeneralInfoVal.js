const getGeneralInfoVal = (generalInfo, key) => {
  const findObj = () => {
    if (!generalInfo) {
      return {value: ''}
    }
    return generalInfo.find(obj => obj.key === key);
  };

  switch (key) {
    case 'workTime':
      const receivedWorkTime = findObj();
      const splitted = receivedWorkTime.value.split(' ');
      return `c ${splitted[0]} до ${splitted[1]}`
    case 'phone': 
      const receivedPhone = findObj();
      let tel = receivedPhone.value.replace(/ /g,'');
      tel = tel.startsWith('+') ? tel : `+${tel}`;
      return {
        phone: receivedPhone.value,
        tel
      };
    case 'instagram':
    case 'facebook':
    case 'address':
    case 'email':
      return findObj().value;
  }
};

export default getGeneralInfoVal;
