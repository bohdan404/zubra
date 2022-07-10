import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';
// import { EventType } from './components/TextEditor/textEditorTypes';

export const getEventsStatByDays = (): DocumentNode => {
  return gql`
    query {
      getEventsStatByDays {
        count
        day
        month
        year
      }
    }
  `;
};

export const refresh = (): DocumentNode => {
  return gql`
    mutation {
      refreshTokens {
        access_token
        refresh_token
      }
    }
  `;
};

export const getEventsStatByHours = (): DocumentNode => {
  return gql`
    query {
      getEventsStatByHours {
        count
        hour
        day
        month
        year
      }
    }
  `;
};

export const getEventsStatByMonths = (): DocumentNode => {
  return gql`
    query {
      getEventsStatByMonths {
        count
        month
        year
      }
    }
  `;
};
export const getEventsStatByYear = (): DocumentNode => {
  return gql`
    query {
      getEventsStatByYears {
        count
        year
      }
    }
  `;
};

export const createTemplate = (
  type: string,
  bounds: { left: number; top: number; bottom: number; right: number },
  event_type: number,
  background_id?: string,
  main_id?: string
): DocumentNode => {
  return gql`
    mutation createTemplate($blocks: [CreateBlockDto!]!) {
      createTemplate(
        createTemplateDto: {
          type: ${type}
          bounds: { top: ${bounds.top}, left: ${bounds.left}, bottom: ${bounds.bottom}, right: ${bounds.right} }
          blocks: $blocks
          event_type: ${event_type}
          background_id: "${background_id}"
          main_id: ${main_id}
        }
      ) {
        id
        main_id
      }
    }
  `;
};

export const CREATE_TEMPLATE = gql`
  mutation createTemplate(
    $blocks: [CreateBlockDto!]!
    $bounds: CreateBoundsDto!
    $event_type: TypeEvent
    $type: TypeTemplate!
    $background_id: String
    $main_id: ID
  ) {
    createTemplate(
      createTemplateDto: {
        blocks: $blocks
        type: $type
        bounds: $bounds
        event_type: $event_type
        background_id: $background_id
        main_id: $main_id
      }
    ) {
      id
    }
  }
`;

export const getTemplateById = (template_id: string): DocumentNode => {
  return gql`
    query getTemplateById {
      getTemplateById(id: "${template_id}") {
        blocks {
          editable
          id
          left
          styles
          text
          top
        }
        bounds {
          bottom
          left
          right
          top
          id
        }
        id
        photo
        type
      }
    }
  `;
};
export const GET_TEMPLATE_BY_ID = gql`
  query getTemplateById($id: String!) {
    getTemplateById(id: $id) {
      blocks {
        editable
        id
        left
        styles
        text
        top
      }
      bounds {
        bottom
        left
        right
        top
        id
      }
      background {
        id
        url
      }
      main_id
      event_type

      background_id
      id
      photo
      type
    }
  }
`;

export const EDIT_TEMPLATE = gql`
  mutation editTemplate(
    $blocks: [CreateBlockDto!]!
    $bounds: CreateBoundsDto!
    $event_type: TypeEvent
    $type: TypeTemplate!
    $background_id: String
    $id: ID!
  ) {
    editTemplate(
      templateDto: {
        blocks: $blocks
        type: $type
        bounds: $bounds
        event_type: $event_type
        background_id: $background_id
        id: $id
      }
    ) {
      id
    }
  }
`;

export const GET_ALL_TEMPLATES = gql`
  query getOurTemplates($type: TypeEvent) {
    getOurTemplates(type: $type) {
      id
      blocks {
        editable
        id
        left
        styles
        text
        top
      }
      bounds {
        bottom
        id
        left
        right
        top
      }
      created_at
      background_id
      background {
        url
      }
      main_id
      event_type
      type
    }
  }
`;

export const UPLOAD_IMG_FILE = gql`
  mutation ($file: Upload!, $type: TypeBackground!, $event_type: TypeEvent!) {
    createBackground(file: $file, type: $type, event_type: $event_type) {
      url
      id
      type
      event_type
    }
  }
`;

export const GET_ALL_BACKGROUND = gql`
  query getAllOurBackgroundsWithStat {
    getAllOurBackgroundsWithStat {
      url
      templates_count
      id
      key
      event_type
    }
  }
`;
export const DELETE_BACKGROUND = gql`
  mutation deleteBackgroundById($id: String!) {
    deleteBackgroundById(id: $id) {
      message
      status
    }
  }
`;

export const DELETE_BACKGROUND_SELECTED = gql`
  mutation deleteManyBackgroundsByIds($background_ids: [String!]!) {
    deleteManyBackgroundsByIds(background_ids: $background_ids) {
      message
      status
    }
  }
`;
export const DELETE_TAMPLATE_SELECTED = gql`
  mutation deleteManyTemplates($template_ids: [String!]!) {
    deleteManyTemplates(template_ids: $template_ids) {
      message
      status
    }
  }
`;

export const getUsersStatByMinutes = gql`
  query getUsersStatByMinutes {
    getUsersStatByMinutes {
      count
      day
      hour
      minute
      month
      year
    }
  }
`;

export const getUsersStatByMonths = gql`
  query getUsersStatByMonths {
    getUsersStatByMonths {
      count
      month
      year
    }
  }
`;

export const getUserStatByHours = gql`
  query getUsersStatByHours {
    getUsersStatByHours {
      count
      day
      hour
      month
      year
    }
  }
`;
export const getUsersStatByDays = gql`
  query getUsersStatByDays {
    getUsersStatByDays {
      count
      day
      month
      year
    }
  }
`;

export const getUsersStatByYears = gql`
  query getUsersStatByYears {
    getUsersStatByYears {
      count
      year
    }
  }
`;

export const getTemplateStatByDays = gql`
  query getTemplateStatByDays($event_type: TypeEvent) {
    getTemplateStatByDays(event_type: $event_type) {
      count
      day
      month
      year
    }
  }
`;

export const getTemplateStatByHours = gql`
  query getTemplateStatByHours($event_type: TypeEvent) {
    getTemplateStatByHours(event_type: $event_type) {
      count
      day
      hour
      month
      year
    }
  }
`;

export const getTemplateStatByMinutes = gql`
  query getTemplateStatByMinutes($event_type: TypeEvent) {
    getTemplateStatByMinutes(event_type: $event_type) {
      count
      day
      hour
      minute
      month
      year
    }
  }
`;

export const getTemplateStatByMonths = gql`
  query getTemplateStatByMonths($event_type: TypeEvent) {
    getTemplateStatByMonths(event_type: $event_type) {
      count
      month
      year
    }
  }
`;

export const getTemplateStatByYears = gql`
  query getTemplateStatByYears($event_type: TypeEvent) {
    getTemplateStatByYears(event_type: $event_type) {
      count
      year
    }
  }
`;

export const getAllEvents = gql`
  query getEventsByYears {
    getEventsStatByYears {
      count
      year
    }
  }
`;
export const GET_ALL_CHATS = gql`
  query getAllChats {
    getAllChats {
      id
      lastMessage {
        text
        createdAt
        isRead
        sender
        isReadAdmin
      }
      user {
        first_name
        last_name
        title
      }
      user_id
      unreadedMessagesCount
    }
  }
`;
export const GET_ALL_MESSAGE = gql`
  query getAllMessagesInChat($chatId: String!) {
    getAllMessagesInChat(chatId: $chatId) {
      attachment
      chat_id
      createdAt
      id
      isRead
      sender
      text
      user_id
    }
  }
`;

export const GET_UNREAD_MESSAGE_COUNT = gql`
  query getUnreadedChatsCount {
    getUnreadedChatsCount
  }
`;

// export const MESSAGE_SUBSCRIPTION = gql`
//   subscription messageAdded($user_id: String!) {
//     messageAdded(user_id: $user_id) {
//       chat_id
//       text
//       id
//       sender
//     }
//   }
// `;
export const SEND_MESSAGE_USER = gql`
  mutation sendMessageToUser($chatId: String!, $text: String, $file: Upload) {
    sendMessageToUser(chatId: $chatId, text: $text, file: $file) {
      chat_id
      text
      sender
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    getCurrentUser {
      email
      id
    }
  }
`;
export const GET_MESSAGE_CHAT = gql`
  subscription messageAddedInAnyChat {
    messageAddedInAnyChat {
      id
      text
      chat_id
    }
  }
`;
export const loginWithEmailPassAdmin = (email: string, password: string) => {
  return gql`
   mutation { loginWithEmailPassAdmin (
      email: "${email}"
      password: "${password}"
    ) {
        access_token
        refresh_token
    }
  }
  `;
};
