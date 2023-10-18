import { ChangeDetectorRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarEventTitleFormatter } from 'angular-calendar';
import { WeekViewHourSegment } from 'calendar-utils';
import {
  startOfDay,
  endOfDay,
  subDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { addDays, addMinutes, endOfWeek } from 'date-fns';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

function floorToNearest(amount: number, precision: number) {
  return Math.floor(amount / precision) * precision;
}

function ceilToNearest(amount: number, precision: number) {
  return Math.ceil(amount / precision) * precision;
}

@Component({
  selector: 'app-drag-comp',
  templateUrl: './drag-comp.component.html',
  styleUrls: ['./drag-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarEventTitleFormatter,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})

export class DragCompComponent implements OnInit {
  viewDate = new Date();
  weekStartsOn: 0 = 0;
  dragToCreateActive = false;
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Event Working on xhibition',
      color: { primary: '#ad2121', secondary: '#FAE3E3', },
      actions: [],
      allDay: false,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: { primary: '#1e90ff',
      secondary: '#D1E8FF', },
      actions: [],
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: { primary: '#e3bc08',
      secondary: '#FDF1BA', },
      allDay: false,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: { primary: '#e3bc08',
      secondary: '#FDF1BA', },
      actions: [],
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];
  days: any[] = [];
  slots: any[] = [];

  isDayViewVisible = true;

  toggleView(value: boolean) {
    this.isDayViewVisible = value;
  }

  // isWeekViewVisible = (value: boolean): boolean => {
  //   return this.isDayViewVisible = value;
  // }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initDays();
  }

  initDays() {
    this.days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    for (let i = 0; i < this.days.length; i++) {
      let a = { day: this.days[i], time: [] };
      this.slots.push(a);
    }
  }

  startDragToCreate(
    segment: WeekViewHourSegment,
    mouseDownEvent: MouseEvent,
    segmentElement: HTMLElement
  ) {
    const dragToSelectEvent: CalendarEvent = {
      id: this.events.length,
      title: 'New slot',
      start: segment.date,
      meta: {
        tmpEvent: true,
      },
      actions: [
        {
          label: '',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter((iEvent) => iEvent !== event);
            this.removeSlot(event.id);
          },
        },
      ],
    };

    this.events = [...this.events, dragToSelectEvent];

    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate, {
      weekStartsOn: this.weekStartsOn,
    });

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          delete dragToSelectEvent.meta.tmpEvent;
          this.dragToCreateActive = false;
          this.refresh();
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      )
      .subscribe((mouseMoveEvent: any) => {
        const minutesDiff = ceilToNearest(
          mouseMoveEvent.clientY - segmentPosition.top,
          30
        );

        const daysDiff =
          floorToNearest(
            mouseMoveEvent.clientX - segmentPosition.left,
            segmentPosition.width
          ) / segmentPosition.width;

        const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
        if (newEnd > segment.date && newEnd < endOfView) {
          dragToSelectEvent.end = newEnd;
        }
        this.refresh();
      });
  }

  private refresh() {
    this.events = [...this.events];
    this.cdr.detectChanges();
    this.getSlots();
  }

  convertTime(t: string | number | Date) {
    return new Date(t).toTimeString();
  }

  convertDay(d: string | number | Date) {
    return new Date(d).toLocaleString('en-us', {
      weekday: 'long',
    });
  }

  getSlots() {
    this.slots.map((day, i) => {
      this.slots[i].time = [];
      this.events.forEach((e) => {
        if (day.day == this.convertDay(e.start)) {
          this.slots[i].time.push({
            startTime: e.start,
            endTime: e.end,
            id: e.id,
          });
        }
      });
    });
  }

  removeSlot(id: string | number | undefined) {
    for (let j = 0; j < this.slots.length; j++) {
      this.slots[j].time = this.slots[j].time.filter(
        (t: { id: any }) => t.id !== id
      );
    }
  }
}
