/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNotebook = /* GraphQL */ `
  mutation CreateNotebook(
    $input: CreateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    createNotebook(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      subjects {
        items {
          id
          name
          notebookID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateNotebook = /* GraphQL */ `
  mutation UpdateNotebook(
    $input: UpdateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    updateNotebook(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      subjects {
        items {
          id
          name
          notebookID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteNotebook = /* GraphQL */ `
  mutation DeleteNotebook(
    $input: DeleteNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    deleteNotebook(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
      subjects {
        items {
          id
          name
          notebookID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
      id
      name
      notebookID
      createdAt
      updatedAt
      notebook {
        id
        name
        createdAt
        updatedAt
        owner
        subjects {
          nextToken
          __typename
        }
        __typename
      }
      owner
      notes {
        items {
          id
          title
          content
          subjectID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
      id
      name
      notebookID
      createdAt
      updatedAt
      notebook {
        id
        name
        createdAt
        updatedAt
        owner
        subjects {
          nextToken
          __typename
        }
        __typename
      }
      owner
      notes {
        items {
          id
          title
          content
          subjectID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
      id
      name
      notebookID
      createdAt
      updatedAt
      notebook {
        id
        name
        createdAt
        updatedAt
        owner
        subjects {
          nextToken
          __typename
        }
        __typename
      }
      owner
      notes {
        items {
          id
          title
          content
          subjectID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      title
      content
      subjectID
      createdAt
      updatedAt
      subject {
        id
        name
        notebookID
        createdAt
        updatedAt
        notebook {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        owner
        notes {
          nextToken
          __typename
        }
        __typename
      }
      owner
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      title
      content
      subjectID
      createdAt
      updatedAt
      subject {
        id
        name
        notebookID
        createdAt
        updatedAt
        notebook {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        owner
        notes {
          nextToken
          __typename
        }
        __typename
      }
      owner
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      title
      content
      subjectID
      createdAt
      updatedAt
      subject {
        id
        name
        notebookID
        createdAt
        updatedAt
        notebook {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        owner
        notes {
          nextToken
          __typename
        }
        __typename
      }
      owner
      __typename
    }
  }
`;
