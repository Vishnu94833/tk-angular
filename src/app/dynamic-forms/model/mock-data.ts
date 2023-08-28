import { DynamicForm } from './dynamic-form';

export class MockDynamicForm {
  static readonly DATA: DynamicForm = {
    buttonDesc: '',
    defaultValue: '',
    readonly: false,
    title: 'General Explanation',
    segments: [
      {
        title: 'Main',
        actions: [
          {
            actionType: 'reset',
            label: 'Reset',
          },
          {
            actionType: 'submit',
            label: 'Submit',
          },
        ],
        params: [
          {
            controlName:"userName",
            labelDesc: 'UserName',
            type: 0,
            placeholder: 'Type here',
            value: 'Vishnu',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userDescDropdown",
            labelDesc: 'MatSelect',
            type: 4,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [
              {
                description: "Hello, I'm Vishnu",
                value: 'Vishnu',
              },
              {
                description: "Hello, I'm Kuppan",
                value: 'Kuppan',
              },
              {
                description: "Hello, I'm Sujatha",
                value: 'Sujatha',
              },
            ],
          },
          {
            controlName:"userName2",
            labelDesc: 'UserName2',
            type: 0,
            placeholder: 'Type here',
            value: 'Vishnu',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userDescDropdown2",
            labelDesc: 'MatSelect3',
            type: 4,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [
              {
                description: "Hello, I'm Vishnu",
                value: 'Vishnu',
              },
              {
                description: "Hello, I'm Kuppan",
                value: 'Kuppan',
              },
              {
                description: "Hello, I'm Sujatha",
                value: 'Sujatha',
              },
            ],
          },
          //   {
          //     labelDesc: 'name',
          //     type: 0,
          //     placeholder: 'Type here',
          //     value: '',
          //     readonly: true,
          //     color: undefined,
          //     backgroundColor: '',
          //     required: true,
          //     selectData: [],
          //   },
          //   {
          //     labelDesc: 'name',
          //     type: 0,
          //     placeholder: 'Type here',
          //     value: '',
          //     readonly: true,
          //     color: undefined,
          //     backgroundColor: '',
          //     required: true,
          //     selectData: [],
          //   },
          //   {
          //     labelDesc: 'name',
          //     type: 0,
          //     placeholder: 'Type here',
          //     value: '',
          //     readonly: true,
          //     color: undefined,
          //     backgroundColor: '',
          //     required: true,
          //     selectData: [],
          //   },
        ],
      },

      {
        title: 'Personel',
        actions: [
            {
              actionType: 'reset',
              label: 'Reset',
            },
            {
              actionType: 'submit',
              label: 'Submit',
            },
          ],
        params: [
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
        ],
      },

      {
        title: 'Patient',
        actions: [
            {
              actionType: 'reset',
              label: 'Reset',
            },
            {
              actionType: 'submit',
              label: 'Submit',
            },
          ],
        params: [
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
          {
            controlName:"userName",
            labelDesc: 'name',
            type: 0,
            placeholder: 'Type here',
            value: '',
            readonly: true,
            color: undefined,
            backgroundColor: '',
            required: true,
            selectData: [],
          },
        ],
      },
    ],
  };
}
