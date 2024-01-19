import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTodo, findTodo, updateTodo } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContex";
import { Form, Formik, Field, ErrorMessage } from "formik";
import moment from "moment";
function TodoComponent() {
  const { id: todoId } = useParams();
  const navigate = useNavigate();
  const authContex = useAuth();
  const [todo, setTodo] = useState({
    description: "",
    targetDate: "",
    isDone: false,
  });

  function getTodo() {
    if (todoId != -1) {
      findTodo(authContex.user, todoId)
        .then((res) => res.data)
        .then((res) => setTodo({ ...res }));
    }
  }

  useEffect(() => {
    getTodo();
  }, [todoId]);

  function onSubmit(values) {
    const updatedTodo = {
      ...values,
    };

    if (todoId == -1) {
      createTodo(authContex.user, values).then((res) => console.log(res));
      navigate("/todos");
    } else {
      updateTodo(authContex.user, todoId, updatedTodo)
        .then((res) => res.data)
        .then((res) => setTodo(res));
      navigate(`/todos`);
    }
  }
  function validate(value) {
    let errors = {};
    if (value.description.length < 5 || value.description === null) {
      errors.description = "Description must be more than 4 characters";
    }
    if (
      value.targetDate == null ||
      value.targetDate == "" ||
      !moment(value.targetDate).isValid ||
      moment(value.targetDate).isBefore(moment().startOf("day"))
    ) {
      errors.targetDate = "Enter valid target date";
    }
    return errors;
  }
  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      {JSON.stringify(todo)}

      <Formik
        initialValues={{ ...todo }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(prop) => (
          <Form>
            <ErrorMessage
              name="description"
              component={"p"}
              className="alert alert-warning"
            />
            <ErrorMessage
              name="targetDate"
              component={"p"}
              className="alert alert-warning"
            />
            <fieldset className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                type="text"
                className="form-control"
                name="description"
                id="description"
              />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="targetDate">Target Date</label>
              <Field
                type="date"
                className="form-control"
                name="targetDate"
                id="targetDate"
              />
            </fieldset>
            <div>
              <button type="submit" className="btn btn-success mt-3">
                save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TodoComponent;
