/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotebook = /* GraphQL */ `
  subscription OnCreateNotebook($owner: String!) {
    onCreateNotebook(owner: $owner) {
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
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook($owner: String!) {
    onUpdateNotebook(owner: $owner) {
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
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook($owner: String!) {
    onDeleteNotebook(owner: $owner) {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject($owner: String!) {
    onCreateSubject(owner: $owner) {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject($owner: String!) {
    onUpdateSubject(owner: $owner) {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject($owner: String!) {
    onDeleteSubject(owner: $owner) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
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
