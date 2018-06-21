import Form from './Form';
import React from 'react';
import ReactDOM from 'react-dom';

const formSchema = {
  title: 'Form Title',
  pages: [
    {
      id: 'initial_page',
      title: 'Get Started',
      description: 'This is a page description',
      fields: [
        {
          type: 'text',
          hint: 'Let me help you with this.',
          label: 'Text example',
          name: 'text_field'
        },
        {
          type: 'select',
          choices: [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' },
            { label: 'D', value: 'D' }
          ],
          hint: 'Example hint text',
          label: 'Select example',
          name: 'select_choices_field'
        }
      ]
    },
    {
      id: 'second_page',
      title: 'Checkboxes & Radios',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fields: [
        {
          type: 'radio',
          choices: [
            { label: 'Choice 1', value: 'choice_1' },
            { checked: true, label: 'Choice 2', value: 'choice_2' }
          ],
          label: 'Radio example',
          name: 'choices_field'
        },
        {
          type: 'checkbox',
          choices: [
            { label: 'Choice 1', value: 'A' },
            {
              defaultChecked: true,
              label: 'Choice 2',
              hint: 'Example hint text',
              value: 'B'
            }
          ],
          label: 'Checkbox example',
          multiple: true,
          name: 'multiple_choices_field'
        }
      ]
    },
    {
      id: 'third_page',
      title: 'Dates & Months',
      fields: [
        {
          type: 'date',
          label: 'Date',
          name: 'date_field'
        },
        {
          type: 'month',
          disabledMonths: [7, 8, 9, 10, 11, 12],
          label:
            'Select the months you were eligible for employer coverage in 2017',
          name: 'month_picker_field'
        }
      ]
    }
  ]
};

ReactDOM.render(
  <Form schema={formSchema} />,
  document.getElementById('js-example')
);
