export const data =
{
   "hq":{
      "date":{
         "start":"Jul 12",
         "end":"Jul 18"
      },
      "info":"4th Floor had the highest density at 69 sq. ft per person",
      "table":[
         {
            "space":"4th Floor",
            "area":31000,
            "density":69
         },
         {
            "space":"Ames HQ",
            "area":124000,
            "density":140
         },
         {
            "space":"3rd Floor",
            "area":31000,
            "density":168
         },
         {
            "space":"2nd Floor",
            "area":31000,
            "density":172
         },
         {
            "space":"1st Floor",
            "area":31000,
            "density":175
         }
      ],
      "summary":[
         "The North American average is currently 150-175 sq. ft per person",
         "Open office spaces for tech companies typically use even less at 125-175 sq."
      ],
      "learnings":"We're tracking well towards our annual goal, but we're getting some complains about noise. On the 3rd floor, we might need to consider a team sift since Sales occupies a large swath of our desk areas there."
   },
   "conference_room":{
      "usage":{
         "date":{
            "start":"Jul 12",
            "end":"Jul 18"
         },
         "info":"Room 204 was used 91% of the time, totalling 41 hours",   
         "table":[
            {
               "count": 4,
               "room":"Room 204",
               "usage":91
            },
            {
               "count": 10,
               "room":"Room 208",
               "usage":91
            },
            {
               "count": 4,
               "room":"Room 205",
               "usage":85
            },
            {
               "count": 4,
               "room":"Womens Room",
               "usage":84
            },
            {
               "count": 4,
               "room":"Room 202",
               "usage":75
            },
            {
               "count": 12,
               "room":"Room 207",
               "usage":72
            },
            {
               "count": 12,
               "room":"Room 206",
               "usage":68
            }
         ],
         "summary":[
            "Density considers 70% an over-utilized space. If you factor in room transition time, 70% means it's highly unlikely there's an oppurtunity for someone to have an impromptu meeting in the space."
         ],
         "learnings":"There's an over uthilization problem on this floor and we may want to explore phone booths or dividing up these rooms."
      },
      "occupancy":{
         "date":{
            "start":"Jul 12",
            "end":"Jul 18"
         },
         "info":"When in use, groups of 2 people are in these spaces most often. Tthese groups occupied these spaces 28% of the time (around 104 hours).",   
         "table":[
            {
               "people":"1",
               "occupancy":28
            },
            {
               "people":"2",
               "occupancy":28
            },
            {
               "people":"3",
               "occupancy":20
            },
            {
               "people":"4",
               "occupancy":13
            },
            {
               "people":"5",
               "occupancy":5
            },
            {
               "people":"6",
               "occupancy":3
            },
            {
               "people":"7",
               "occupancy":1
            },
            {
               "people":"8+",
               "occupancy":3
            }
         ],
         "summary":[
            "The majority of the time, 1person is occupying these conference rooms."
         ],
         "learnings":"This isn't unexpected for a remote company. It seems we need to add more resources, but that perhaps these can be 1 person resources? ROOM looks like a decent option for us."
      },
      "hourly":{
         "date":{
            "start":"Jul 12",
            "end":"Jul 18"
         },
         "info":"Ames HQ saw the largest crowd(833) from 1-2pm on Monday",
         "table":[
            [
               800,
               700,
               600,
               500,
               400
            ],
            [
               800,
               700,
               600,
               500,
               400
            ],
            [
               800,
               700,
               600,
               500,
               400
            ],
            [
               800,
               700,
               600,
               500,
               400
            ],
            [
               800,
               700,
               600,
               500,
               400
            ],
            [
               800,
               700,
               600,
               500,
               400
            ],
            [
               800,
               700,
               600,
               500,
               400
            ],
            [
               800,
               700,
               600,
               500,
               400
            ]
         ]
      }
   }
}