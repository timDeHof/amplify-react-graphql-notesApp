/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotebook = /* GraphQL */ `
  query GetNotebook($id: ID!) {
    getNotebook(id: $id) {
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
export const listNotebooks = /* GraphQL */ `
  query ListNotebooks(
    $filter: ModelNotebookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotebooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
          __typename
        }
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
