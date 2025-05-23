'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { FaReact } from 'react-icons/fa'; // Import the FaReact icon
import dynamic from 'next/dynamic';

export default function Experience() {
    const { ref } = useSectionInView('Experience');
    const { theme } = useTheme();

    function ClicksLink(item: any) {
        if (item.link) {
            window.open(item.link, '_blank');
        }
    }

    const DynamicVideo = dynamic(
        () => {
            return import('./videocomponent');
        },
        { ssr: false } // This will only load the component on client side
    );

    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>My Experience 🌟</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === 'light'
                                        ? '#f3f4f6'
                                        : 'rgba(255, 255, 255, 0.05)',
                                boxShadow: 'none',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem',
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === 'light'
                                        ? '0.4rem solid #9ca3af'
                                        : '0.4rem solid rgba(255, 255, 255, 0.5)',
                            }}
                            date={item.date}
                            icon={React.createElement(FaReact)} // Use the FaReact icon
                            iconStyle={{
                                background:
                                    theme === 'light'
                                        ? 'white'
                                        : 'rgba(255, 255, 255, 0.15)',
                                fontSize: '1.5rem',
                            }}
                        >
                            <h3
                                className="font-semibold capitalize"
                                onClick={() => ClicksLink(item)}
                            >
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0">{item.company}</p>
                            <div className="text-gray-700 dark:text-white/75">
                                {item.description}
                            </div>
                            {/* Conditionally render the video only if it exists */}
                            {item.video && <DynamicVideo src={item.video} />}
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
