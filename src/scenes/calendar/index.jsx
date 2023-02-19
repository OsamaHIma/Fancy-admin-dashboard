import { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handelDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handelEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you wanna delete the event: '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="10px">
      <Header title="CALENDAR" subTitle="Full Calendar interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* calendar sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.green[500],
                  margin: "10px 0",
                  borderRadius: "3px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {/* {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })} */}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            weekends={false}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handelDateClick}
            eventClick={handelEventClick}
            eventsSet={(events) => {
              setCurrentEvents(events);
            }}
            initialEvents={[
              {
                id: "1234",
                title: "All-day event",
                date: "2023-02-21",
              },
              {
                id: "4321",
                title: "Timed event",
                date: "2023-02-",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Calendar;
