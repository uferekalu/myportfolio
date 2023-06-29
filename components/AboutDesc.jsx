'use client';

import { Form } from 'react-bootstrap';

export default function AboutDesc(props) {
  return (
    <>
      <Form.Label
        style={{
          fontSize: '14px',
          color: 'black',
          fontWeight: 600,
        }}
      >
        {props.jobTitle}
      </Form.Label>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 600,
          }}
        >
          Company:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 400,
          }}
        >
          Company: {props.company}
        </Form.Label>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 600,
          }}
        >
          Job Type:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 400,
          }}
        >
          {props.jobType}
        </Form.Label>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 600,
          }}
        >
          Duration:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 400,
          }}
        >
          {props.startDate} - {props.endDtate}
        </Form.Label>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 600,
          }}
        >
          Location:
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '14px',
            color: 'black',
            fontWeight: 400,
          }}
        >
          {props.location}
        </Form.Label>
      </div>
      <Form.Label
        style={{
          display: 'flex',
          fontSize: '14px',
          marginTop: '10px',
          fontWeight: 600,
        }}
      >
        Description:
      </Form.Label>
      <Form.Label
        style={{
          display: 'flex',
          fontSize: '14px',
          textAlign: 'justify',
        }}
      >
        {props.description}
      </Form.Label>
      <ul
        style={{
          marginTop: '-5px',
          marginLeft: '-10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <li
          style={{
            fontSize: '14px',
            textAlign: 'justify',
          }}
        >
          {props.activities1}
        </li>
        <li
          style={{
            fontSize: '14px',
            textAlign: 'justify',
          }}
        >
          {props.activities2}
        </li>
        <li
          style={{
            fontSize: '14px',
            textAlign: 'justify',
          }}
        >
          {props.activities3}
        </li>
        {props.activities4 && (
          <li
            style={{
              fontSize: '14px',
              textAlign: 'justify',
            }}
          >
            {props.activities4}
          </li>
        )}
      </ul>
    </>
  );
}
