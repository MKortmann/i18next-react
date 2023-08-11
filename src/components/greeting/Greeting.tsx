import React from 'react';

interface Props {
  t: any;
}

const getGreetingTime = (d = new Date().getHours()) => {
  const split_afternoon = 12; // 24hr time to split the afternoon
  const split_evening = 17; // 24hr time to split the evening
  const currentHour = d;

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    return 'afternoon';
  } else if (currentHour >= split_evening) {
    return 'evening';
  }
  return 'morning';
};

export const Greeting: React.FC<Props> = ({ t }) => {
  return (
    <div>
      <div>
        {t('footer.date', { date: new Date(), context: getGreetingTime() })}
      </div>
      <div>
        {t('footer.dateShort', {
          date: new Date(),
          context: getGreetingTime(),
        })}
      </div>
    </div>
  );
};
