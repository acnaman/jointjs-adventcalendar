import { dia, util } from 'jointjs';

/**
 * 参加受付中の日
 */
export const Accepting = dia.Element.define(
  'calendar.Accepting',
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
      <rect @selector="edit-button" />
    `
  },
  {
    create(date, point) {
      const accepting = new Accepting();
      accepting.attr('date/text', date);
      accepting.position(point.x, point.y);

      return accepting;
    }
  }
);
