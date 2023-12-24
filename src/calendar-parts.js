import { dia, util } from 'jointjs';

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
        width: 'calc(w/3)',
        height: 'calc(w/3)',
        x: 'calc(x)' + 'calc(w/3)',
        y: 'calc(y)' + 'calc(h/2)',
        event: 'editCalendar',
      },
      date: {
        x: 'calc(x+10)',
        y: 'calc(y+20)',
        fontSize: '12',
        fontWeight: 'bold'
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
        x: 'calc(x + calc(w/2 - 15))',
        y: 'calc(y + calc(h-35))',
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
      reservedDay.attr('date/text', date);
      reservedDay.position(point.x, point.y);
      reservedDay.attr('title/text', title);

      return reservedDay;
    }
  }
);

