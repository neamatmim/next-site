import React from 'react';
import { useRecord, useGetRecord } from '../../lib/learn/records';
import { useHasUser } from '../../lib/learn/user';
import { login } from '../../lib/learn/actions';
import courses from '../../lib/learn/courses';
import StepBar from './StepBar';
import AnswerBox from './AnswerBox';
import StepNav from './StepNav';
import GitHubButton from './github-button';

const Lesson = ({ meta, children }) => {
  const [record, dispatchRecord] = useRecord(meta);
  const getRecord = useGetRecord();
  const hasUser = useHasUser();

  const course = courses.find(c => c.id === meta.courseId);

  const indexLesson = course.lessons.findIndex(lesson => lesson.id === meta.lessonId);
  const lesson = course.lessons[indexLesson];
  const nextLessonId = (course.lessons[indexLesson + 1] || {}).id;
  const { steps } = lesson;

  const indexStep = steps.findIndex(step => step.id === meta.stepId);
  const prevSteps = steps.slice(0, indexStep);
  const prevStepsVisited = prevSteps.length
    ? prevSteps.every(step => getRecord({ ...meta, stepId: step.id }).visited)
    : true;

  const effectDeps = [
    !meta.question,
    record.ready,
    record.visited,
    !record.checked,
    prevStepsVisited
  ];

  React.useEffect(() => {
    if (effectDeps.every(dep => dep)) {
      dispatchRecord({ type: 'check' });
    }
  }, effectDeps);

  if (!hasUser && meta.stepId) {
    return (
      <div className="lesson-area">
        <h2 className="f1">{meta.title}</h2>
        <div className="namecard">
          <p className="f6 mute">
            By logging in, you will unlock advanced navigation, and we will save your progress.
          </p>
          <GitHubButton flat onClick={login} />
        </div>
        <style jsx>{`
          h2 {
            margin: 0.8rem 0 2rem 0;
          }
          p {
            margin: 0 0 1.5rem 0;
          }
          .namecard {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 1.5rem 2rem;
            border-radius: 7px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="lesson-area">
      <h2 className="f1">{meta.title}</h2>
      {steps && hasUser && <StepBar meta={meta} steps={steps} />}
      <div className="content">{children}</div>
      {meta.question && hasUser && (
        <AnswerBox
          record={record}
          dispatchRecord={dispatchRecord}
          answers={meta.question.answers}
          correctAnswer={meta.question.correctAnswer}
        />
      )}
      {steps && (
        <div className="lesson-step-nav">
          <StepNav meta={meta} steps={steps} nextLessonId={nextLessonId} />
        </div>
      )}
      <style jsx>{`
        h2 {
          margin: 0.8rem 0 2rem 0;
        }
        .content {
          margin: 3rem 0 0 0;
        }
        .lesson-step-nav {
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
};

export default Lesson;
