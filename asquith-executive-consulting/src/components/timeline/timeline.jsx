import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => (
  <div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date='2019 - present'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Chief Executive Officer</h3>
        <h4 className='vertical-timeline-element-subtitle'>Catalyst Education Pty Ltd</h4>
        <p>
          Catalyst Education is a leading supplier of quality vocational education in Australia, specialising in the early childhood, aged care and disability care industries.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2015 - present'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Board Member</h3>
        <h4 className='vertical-timeline-element-subtitle'>International Education Association of Australia (IEAA)</h4>
        <p>
          The International Education Association of Australia (IEAA) strives to empower professionals, engage institutions and enhance Australia’s reputation as a provider of world-class education.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2016 - 2019'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Director and Principal</h3>
        <h4 className='vertical-timeline-element-subtitle'>Navitas, University of Canberra College</h4>
        <p>
          Navitas is one of the world’s largest education providers and has helped generations of learners transform their lives through education.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2011 - 2016'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Director, Future Students and International</h3>
        <h4 className='vertical-timeline-element-subtitle'>james Cook University, Australia</h4>
        <p>
          James Cook University (JCU) is a leading tertiary institution in the Asia-Pacific region with campuses in Townsville, Cairns and Singapore.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2010 - 2015'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Chair</h3>
        <h4 className='vertical-timeline-element-subtitle'>Australian Universities International Director's Forum</h4>
        <p>
          The aim of AUIDF is to support University stakeholders to advance the quality reputation of international education in Australia through increased cooperation and cohesion.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2010 - 2015'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Director International</h3>
        <h4 className='vertical-timeline-element-subtitle'>Southern Cross University</h4>
        <p>
          Southern Cross University is a progressive and connected regional research university, with vibrant campuses in two states, New South Wales and Queensland.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date='date'
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Need to add studies for coaching here</h3>
        <h4 className='vertical-timeline-element-subtitle'>Need to add studies for coaching here</h4>
        <p>
          Need to add studies for coaching here
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date='2017 - 2018'
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Executive Leadership Development Program</h3>
        <h4 className='vertical-timeline-element-subtitle'>INSEAD</h4>
        <p>
          NaviLead Program; Strategy, Culture and Organisational Excellence
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date='2012'
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Strategic Leadership Programme (SLP)</h3>
        <h4 className='vertical-timeline-element-subtitle'>institute for Strategic Leadership</h4>
        <p>
          The ISL Strategic Leadership Programme (SLP) is a 6-day, intensive residential programme for CEOs, senior executives and owner-managers. Through a blend of diagnostic tools, feedback, 1:1 executive coaching, lifestyle coaching, experiential learning and peer learning, participants gain powerful and enduring insights into their own leadership and strategic capabilities.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  </div>
)

export default Timeline
