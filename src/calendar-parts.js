import { dia, util } from 'jointjs';

export const createCalendarDay = function (date, point, title, url) {
  if (!!title && !!url) {
    return PostedDay.create(date, point, title, url);
  }

  if (!!title) {    
    return ReservedDay.create(date, point, title);
  }

  return AcceptingDay.create(date, point);
}

/**
 * 参加受付中の日
 */
export const AcceptingDay = dia.Element.define(
  'calendar.AcceptingDay',
  {
    size: { width: 150, height: 170 },
    attrs: {
      body: {
        width: 'calc(w)',
        height: 'calc(h)',
        stroke: '#aaa',
        strokeWidth: 1,
        fill: '#ffe',
        event: 'editCalendar',
      },
      'add-icon': {
        href: '134224_add_plus_new_icon.svg',
        width: 'calc(w/4)',
        height: 'calc(w/4)',
        x: 'calc(x + calc(0.375 * w))',
        y: 'calc(y + calc(h/2))',
        event: 'editCalendar',
      },
      date: {
        x: 'calc(x+10)',
        y: 'calc(y+20)',
        fontSize: '12',
        fontWeight: 'bold',
      },
    }
  },
  {
    markup: util.svg`
      <rect @selector="body" />
      <image @selector="add-icon" />
      <text @selector="date" />
    `
  },
  {
    create(date, point) {
      const acceptingDay = new AcceptingDay();
      acceptingDay.prop('date', date);
      acceptingDay.attr('date/text', date);
      acceptingDay.position(point.x, point.y);

      return acceptingDay;
    }
  }
);

/**
 * 予約済の日
 */
export const ReservedDay = dia.Element.define(
  'calendar.ReservedDay',
  {
    size: { width: 150, height: 170 },
    attrs: {
      body: {
        width: 'calc(w)',
        height: 'calc(h)',
        stroke: '#aaa',
        strokeWidth: 1,
        fill: '#ffe',
        event: 'editCalendar',
      },
      date: {
        x: 'calc(x+10)',
        y: 'calc(y+20)',
        fontSize: '12',
        fontWeight: 'bold'
      },
      title: {
        x: 'calc(x+10)',
        y: 'calc(y + calc(h/3))',
        width: 'calc(w-20) ',
        height: 'calc(h/3)',
        fontSize: '12',
      },
      'edit-button': {
        width: 'calc(w-20)',
        height: '40',
        x: 'calc(x+10)',
        y: 'calc(y + calc(h-60))',
        fill: "#eee",
        rx: "5",
        ry: "5",
        class: "calendar-button",
      },
      'edit-button-text': {
        x: 'calc(x + calc(w/2 - 12))',
        y: 'calc(y + calc(h-35))',
        fontSize: '12',
      }
    }
  },
  {
    markup: util.svg`
      <rect @selector="body" />
      <text @selector="date" />
      <text @selector="title" />
      <g @selector="edit-button-wrapper">
        <rect @selector="edit-button" />
        <text @selector="edit-button-text">編集</text>
      </g>
    `
  },
  {
    create(date, point, title) {
      const reservedDay = new ReservedDay();
      reservedDay.prop('date', date);
      reservedDay.attr('date/text', date);
      reservedDay.position(point.x, point.y);
      reservedDay.attr('title/text', title);

      return reservedDay;
    }
  }
);

/**
 * 投稿済の日
 */
export const PostedDay = dia.Element.define(
  'calendar.PostedDay',
  {
    size: { width: 150, height: 170 },
    attrs: {
      body: {
        width: 'calc(w)',
        height: 'calc(h)',
        stroke: '#aaa',
        strokeWidth: 1,
        fill: '#ffe',
        event: 'editCalendar',
      },
      date: {
        x: 'calc(x+10)',
        y: 'calc(y+20)',
        fontSize: '12',
        fontWeight: 'bold'
      },
      link: {
        fontWeight: 'bold',
        fill: 'blue',
        target: '_blank',
        style: 'cursor: pointer',
      },
      title: {
        x: 'calc(x+10)',
        y: 'calc(y + calc(h/3))',
        width: 'calc(w-20) ',
        height: 'calc(h/3)',
        fontSize: '12',
      },
      'edit-button': {
        width: 'calc(w-20)',
        height: '40',
        x: 'calc(x+10)',
        y: 'calc(y + calc(h-60))',
        fill: "#eee",
        rx: "5",
        ry: "5",
        class: "calendar-button",
      },
      'edit-button-text': {
        x: 'calc(x + calc(w/2 - 12))',
        y: 'calc(y + calc(h-35))',
        fontSize: '12',
      }
    }
  },
  {
    markup: util.svg`
      <rect @selector="body" />
      <text @selector="date" />
      <a @selector="link">
        <text @selector="title" />
      </a>
      <g @selector="edit-button-wrapper">
        <rect @selector="edit-button" />
        <text @selector="edit-button-text">編集</text>
      </g>
    `
  },
  {
    create(date, point, title, url) {
      const postedDay = new PostedDay();
      postedDay.prop('date', date);
      postedDay.attr('date/text', date);
      postedDay.position(point.x, point.y);
      postedDay.attr('title/text', title);
      postedDay.attr('link/xlink:href', url);

      return postedDay;
    }
  }
);