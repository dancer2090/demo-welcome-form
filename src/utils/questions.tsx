export interface OptionInterface {
  key: string;
  alias: string;
}

export interface AnswerInterface {
  value: any;
  check: Function;
}

export interface QuestionInterface {
  key: string;
  type: "radio" | "checkbox";
  alias: string;
  options: OptionInterface[];
  answer: AnswerInterface;
  points: number;
}

const QUESTION_SPRINT = "1-question-sprint";
const QUESTION_TEAMSIZE = "2-question-teamsize";
const QUESTION_CUSTOMER_ROLE = "3-question-customer-role";
const QUESTION_BENEFITS = "4-question-benefits";
const QUESTION_RULES = "5-question-rules";

export const questions: QuestionInterface[] = [
  {
    key: QUESTION_SPRINT,
    type: "radio",
    alias: "What is a sprint?",
    options: [
      {
        key: "1-express",
        alias: "Express development. As fast as we can. Bugfix after release.",
      },
      {
        key: "2-timeline",
        alias: "A project timeline. Helps to estimate a project",
      },
      {
        key: "3-period",
        alias:
          "A small period of time (2 weeks or less) to do the piece of work 100% correctly",
      },
    ],
    answer: {
      value: "3-period",
      check: (answer: string, correct: string) => answer === correct,
    },
    points: 25,
  },
  {
    key: QUESTION_TEAMSIZE,
    type: "radio",
    alias: "What is recommended team size for the scrum project?",
    options: [
      {
        key: "5-9",
        alias: "5-9",
      },
      {
        key: "1-5",
        alias: "1-5",
      },
      {
        key: "10-20",
        alias: "10-20",
      },
      {
        key: ">20",
        alias: "more than 20",
      },
    ],
    answer: {
      value: "5-9",
      check: (answer: string, correct: string) => answer === correct,
    },
    points: 25,
  },
  {
    key: QUESTION_CUSTOMER_ROLE,
    type: "checkbox",
    alias: "What is customer role?",
    options: [
      {
        key: "1-product-owner",
        alias: "Includes in a team as product owner",
      },
      {
        key: "2-task-leader",
        alias: "Task leader",
      },
      {
        key: "3-task-control",
        alias: "To control the result after each task",
      },
      {
        key: "4-product-provider",
        alias: "After the first release, provides product to the client",
      },
      {
        key: "5-feedback-analizer",
        alias: "Analyze client feedback",
      },
    ],
    answer: {
      value: [
        "1-product-owner",
        "2-task-leader",
        "4-product-provider",
        "5-feedback-analizer",
      ],
      check: (answer: string[], correct: string[]) => answer === correct,
    },
    points: 20,
  },
  {
    key: QUESTION_BENEFITS,
    type: "checkbox",
    alias: "What scrum benefits do you know?",
    options: [
      {
        key: "1-quick-versions",
        alias: "Quickly gives A and B versions of project to the clients",
      },
      {
        key: "2-save-time",
        alias: "Reduces total development time",
      },
      {
        key: "3-adaptive-product",
        alias: "Product becomes adaptive to market",
      },
      {
        key: "4-small-team",
        alias: "The small team do more than a big team",
      },
      {
        key: "5-save-money",
        alias: "Save customer's money",
      },
    ],
    answer: {
      value: [
        "1-quick-versions",
        "2-save-time",
        "3-adaptive-product",
        "4-small-team",
        "5-save-money",
      ],
      check: (answer: string[], correct: string[]) => answer === correct,
    },
    points: 30,
  },
  {
    key: QUESTION_RULES,
    type: "radio",
    alias: "Scrum rules",
    options: [
      {
        key: "1-product",
        alias: "Product is more important than documentation",
      },
      {
        key: "2-reaction",
        alias: "Reaction on changes is more important than origin plan",
      },
      {
        key: "3-cooperation-customer",
        alias:
          "Cooperation with a customer is more important than contract discussion",
      },
      {
        key: "4-cooperation-people",
        alias:
          "People and their cooperation are more important than processes and tools",
      },
      {
        key: "5-all",
        alias: "all off above",
      },
    ],
    answer: {
      value: "5-all",
      check: (answer: string[], correct: string[]) => answer === correct,
    },
    points: 30,
  },
];

export interface UserAnswerInterface {
  key: string;
  value: any;
}

export const defaultAnswers: UserAnswerInterface[] = [
  {
    key: QUESTION_SPRINT,
    value: "",
  },
  {
    key: QUESTION_TEAMSIZE,
    value: "",
  },
  {
    key: QUESTION_CUSTOMER_ROLE,
    value: [],
  },
  {
    key: QUESTION_BENEFITS,
    value: [],
  },
  {
    key: QUESTION_RULES,
    value: "",
  },
];

export const resultConfig = {
  less30: {
    header: "Your result is bad",
    text: "Try again when you will be ready )))",
    color: "red",
  },
  less60: {
    header: "Your result is normal",
    text: "You can use scram in your projects",
    color: "yellow",
  },
  more60: {
    header: "Your result is good",
    text: "You are a talented manager",
    color: "#1DDA30",
  },
};
