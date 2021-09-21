import React from 'react';
import getGeneralInfoVal from '../../utils/getGeneralInfoVal';

export default function ContactsAddress({ generalInfo }) {
    const [phoneObj, setPhoneObj] = React.useState({});
    const [email, setEmail] = React.useState('');
    React.useEffect(() => {
        setPhoneObj(getGeneralInfoVal(generalInfo, 'phone'));
        setEmail(getGeneralInfoVal(generalInfo, 'email'));
    },[generalInfo]);

  return (
     <address className={"contacts__list"}>
                                <div className={"contacts__item"}>
                                    <span className="icon-location"></span>

                                    <div className={"contacts__block"}>
                                        
                                        <a className={"contacts__title"}>
                                            {getGeneralInfoVal(generalInfo, 'address')}
                                        </a>
                                        
                                        <div className={"contacts__text"}>
                                        Институт общей и неотложной хирургии им. В.Т. Зайцева НАМН Украины, Кафедра онкологии и детской онкологии ХМАПО
                                        </div>
                                    </div>
                                </div>

                                <div className={"contacts__item"}>
                                    <span className="icon-phone"></span>

                                    <div className={"contacts__block"}>
                                        <a className={"contacts__title"} href={"tel:"+phoneObj.tel}>
                                        {phoneObj.phone}
                                        </a>

                                        <div className={"contacts__text"}>
                                        По всем вопросам. {getGeneralInfoVal(generalInfo, 'workTime')}
                                        </div>
                                    </div>
                                </div>

                                <div className={"contacts__item"}>
                                    <span className="icon-mail"></span>

                                    <div className={"contacts__block"}>
                                        <a className={"contacts__title"} href={"mailto:"+email}>
                                            {email}
                                        </a>

                                        <div className={"contacts__text"}>
                                            Наша электронная почта
                                        </div>
                                    </div>
                                </div>
    </address>
  );
}
