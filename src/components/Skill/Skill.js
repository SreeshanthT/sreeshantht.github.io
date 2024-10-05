import React from 'react';

export default function({skill}) {
  return (
    <div className="col-lg-6" key={skill.id}>
        <div className="progress">
            <span className="skill">
                {skill.name} <i className="val">{skill.percentage}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${0}%` }}
                ></div>
            </div>
        </div>
    </div>
  )
}
