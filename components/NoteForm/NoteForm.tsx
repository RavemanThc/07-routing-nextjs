"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "@/lib/api";

import css from "./NoteForm.module.css";

// ✅ 1. НОРМАЛЬНЫЙ ТИП ПРОПСОВ
interface NoteFormProps {
  onClose: () => void;
}

interface FormValues {
  title: string;
  content: string;
  tag: string;
}

// ✅ 2. ВАЛИДАЦИЯ
const schema = Yup.object({
  title: Yup.string()
    .min(3)
    .max(50)
    .required("Required"),
  content: Yup.string().max(500),
  tag: Yup.string().required("Required"),
});

export default function NoteForm({ onClose }: NoteFormProps) {
  const queryClient = useQueryClient();

  // ✅ 3. TANSTACK MUTATION
  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onClose();
    },
  });

  const initialValues: FormValues = {
    title: "",
    content: "",
    tag: "Todo",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => mutation.mutate(values)}
    >
      <Form className={css.form}>
        {/* TITLE */}
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" className={css.input} />
          <ErrorMessage name="title" component="span" className={css.error} />
        </div>

        {/* CONTENT */}
        <div className={css.formGroup}>
          <label htmlFor="content">Content</label>
          <Field
            id="content"
            name="content"
            as="textarea"
            className={css.textarea}
          />
          <ErrorMessage name="content" component="span" className={css.error} />
        </div>

        {/* TAG */}
        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <Field as="select" id="tag" name="tag" className={css.select}>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </Field>
          <ErrorMessage name="tag" component="span" className={css.error} />
        </div>

        {/* ACTIONS */}
        <div className={css.actions}>
          {/* CANCEL */}
          <button
            type="button"
            className={css.cancelButton}
            onClick={onClose}
          >
            Cancel
          </button>

          {/* SUBMIT */}
          <button
            type="submit"
            className={css.submitButton}
            disabled={mutation.isPending}
          >
            Create note
          </button>
        </div>
      </Form>
    </Formik>
  );
}