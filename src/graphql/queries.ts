/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      type
      id
      createdAt
      updatedAt
      firstName
      lastName
      phone
      email
      imageUri
      bio
      status
      Setting1
      Setting2
      Setting3
      Setting4
      Setting5
      systemID
      system {
        type
        id
        createdAt
        updatedAt
        name
        hospitals {
          nextToken
        }
      }
      hospital {
        items {
          id
          userID
          hospitalID
          createdAt
          updatedAt
        }
        nextToken
      }
      groups {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        members {
          nextToken
        }
        color
        imageUri
      }
      role {
        items {
          id
          userID
          roleID
          createdAt
          updatedAt
        }
        nextToken
      }
      quals {
        items {
          id
          userID
          qualID
          createdAt
          updatedAt
        }
        nextToken
      }
      shifts {
        items {
          type
          id
          createdAt
          updatedAt
          createdByID
          name
          notes
          systemID
          hospitalID
          departmentID
          roleID
          announcementID
          date
          month
          year
          startTime
          startAMPM
          endTime
          endAMPM
          payMultiplier
          payRate
          status
          userID
          priority
          numNeeded
          trade
          giveUp
        }
        nextToken
      }
      messageSent {
        items {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          userID
          otherUserID
          isReadbyUser
          isReadByOtherUser
          request
          status
          groupID
        }
        nextToken
      }
      messageRec {
        items {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          userID
          otherUserID
          isReadbyUser
          isReadByOtherUser
          request
          status
          groupID
        }
        nextToken
      }
      announcements {
        items {
          id
          type
          createdAt
          updatedAt
          createdByID
          systemID
          hospitalID
          departmentID
          roleID
          title
          accouncement
          notes
          priority
          duration
          expire
          category
          link
          sort
        }
        nextToken
      }
      events {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      type
      id
      createdAt
      updatedAt
      title
      details
      icon
      color
      imageUri
      acronym
      people {
        items {
          id
          userID
          roleID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        title
        details
        icon
        color
        imageUri
        acronym
        people {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getQual = /* GraphQL */ `
  query GetQual($id: ID!) {
    getQual(id: $id) {
      type
      id
      createdAt
      updatedAt
      title
      details
      people {
        items {
          id
          userID
          qualID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listQuals = /* GraphQL */ `
  query ListQuals(
    $filter: ModelQualFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        title
        details
        people {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSystem = /* GraphQL */ `
  query GetSystem($id: ID!) {
    getSystem(id: $id) {
      type
      id
      createdAt
      updatedAt
      name
      hospitals {
        items {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        nextToken
      }
    }
  }
`;
export const listSystems = /* GraphQL */ `
  query ListSystems(
    $filter: ModelSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSystems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        name
        hospitals {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getHospital = /* GraphQL */ `
  query GetHospital($id: ID!) {
    getHospital(id: $id) {
      type
      id
      createdAt
      updatedAt
      name
      systemID
      system {
        type
        id
        createdAt
        updatedAt
        name
        hospitals {
          nextToken
        }
      }
      departments {
        items {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        nextToken
      }
      people {
        items {
          id
          userID
          hospitalID
          createdAt
          updatedAt
        }
        nextToken
      }
      streetNum
      streetAddress
      city
      state
      postalCode
      phone
      color
      imageUri
    }
  }
`;
export const listHospitals = /* GraphQL */ `
  query ListHospitals(
    $filter: ModelHospitalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHospitals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        name
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        departments {
          nextToken
        }
        people {
          nextToken
        }
        streetNum
        streetAddress
        city
        state
        postalCode
        phone
        color
        imageUri
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      type
      id
      createdAt
      updatedAt
      name
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        departments {
          nextToken
        }
        people {
          nextToken
        }
        streetNum
        streetAddress
        city
        state
        postalCode
        phone
        color
        imageUri
      }
      members {
        items {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        nextToken
      }
      color
      imageUri
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        name
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        members {
          nextToken
        }
        color
        imageUri
      }
      nextToken
    }
  }
`;
export const getShift = /* GraphQL */ `
  query GetShift($id: ID!) {
    getShift(id: $id) {
      type
      id
      createdAt
      updatedAt
      createdByID
      createdBy {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      name
      notes
      systemID
      system {
        type
        id
        createdAt
        updatedAt
        name
        hospitals {
          nextToken
        }
      }
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        departments {
          nextToken
        }
        people {
          nextToken
        }
        streetNum
        streetAddress
        city
        state
        postalCode
        phone
        color
        imageUri
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        members {
          nextToken
        }
        color
        imageUri
      }
      roleID
      role {
        type
        id
        createdAt
        updatedAt
        title
        details
        icon
        color
        imageUri
        acronym
        people {
          nextToken
        }
      }
      announcementID
      roannouncementle {
        id
        type
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        title
        accouncement
        notes
        priority
        reactions {
          nextToken
        }
        replies {
          nextToken
        }
        duration
        expire
        category
        link
        shifts {
          nextToken
        }
        sort
      }
      qual {
        type
        id
        createdAt
        updatedAt
        title
        details
        people {
          nextToken
        }
      }
      date
      month
      year
      startTime
      startAMPM
      endTime
      endAMPM
      payMultiplier
      payRate
      status
      userID
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      priority
      numNeeded
      trade
      giveUp
    }
  }
`;
export const listShifts = /* GraphQL */ `
  query ListShifts(
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        name
        notes
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        announcementID
        roannouncementle {
          id
          type
          createdAt
          updatedAt
          createdByID
          systemID
          hospitalID
          departmentID
          roleID
          title
          accouncement
          notes
          priority
          duration
          expire
          category
          link
          sort
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          details
        }
        date
        month
        year
        startTime
        startAMPM
        endTime
        endAMPM
        payMultiplier
        payRate
        status
        userID
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        priority
        numNeeded
        trade
        giveUp
      }
      nextToken
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
      id
      type
      createdAt
      updatedAt
      createdByID
      createdBy {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      systemID
      system {
        type
        id
        createdAt
        updatedAt
        name
        hospitals {
          nextToken
        }
      }
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        departments {
          nextToken
        }
        people {
          nextToken
        }
        streetNum
        streetAddress
        city
        state
        postalCode
        phone
        color
        imageUri
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        members {
          nextToken
        }
        color
        imageUri
      }
      roleID
      role {
        type
        id
        createdAt
        updatedAt
        title
        details
        icon
        color
        imageUri
        acronym
        people {
          nextToken
        }
      }
      title
      accouncement
      notes
      priority
      reactions {
        items {
          id
          type
          createdAt
          updatedAt
          userID
          reaction
          icon
          announcementID
          eventID
        }
        nextToken
      }
      replies {
        items {
          id
          type
          createdAt
          updatedAt
          content
          isRead
          announcementID
          userID
        }
        nextToken
      }
      duration
      expire
      category
      link
      shifts {
        items {
          type
          id
          createdAt
          updatedAt
          createdByID
          name
          notes
          systemID
          hospitalID
          departmentID
          roleID
          announcementID
          date
          month
          year
          startTime
          startAMPM
          endTime
          endAMPM
          payMultiplier
          payRate
          status
          userID
          priority
          numNeeded
          trade
          giveUp
        }
        nextToken
      }
      sort
    }
  }
`;
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        title
        accouncement
        notes
        priority
        reactions {
          nextToken
        }
        replies {
          nextToken
        }
        duration
        expire
        category
        link
        shifts {
          nextToken
        }
        sort
      }
      nextToken
    }
  }
`;
export const getReaction = /* GraphQL */ `
  query GetReaction($id: ID!) {
    getReaction(id: $id) {
      id
      type
      createdAt
      updatedAt
      userID
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      reaction
      icon
      announcement {
        id
        type
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        title
        accouncement
        notes
        priority
        reactions {
          nextToken
        }
        replies {
          nextToken
        }
        duration
        expire
        category
        link
        shifts {
          nextToken
        }
        sort
      }
      announcementID
      event {
        type
        id
        createdAt
        updatedAt
        title
        details
        notes
        imageUri
        link
        status
        priority
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          details
        }
        date
        month
        year
        startTime
        startAMPM
        endTime
        endAMPM
        reaction {
          nextToken
        }
        people {
          nextToken
        }
      }
      eventID
    }
  }
`;
export const listReactions = /* GraphQL */ `
  query ListReactions(
    $filter: ModelReactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        userID
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        reaction
        icon
        announcement {
          id
          type
          createdAt
          updatedAt
          createdByID
          systemID
          hospitalID
          departmentID
          roleID
          title
          accouncement
          notes
          priority
          duration
          expire
          category
          link
          sort
        }
        announcementID
        event {
          type
          id
          createdAt
          updatedAt
          title
          details
          notes
          imageUri
          link
          status
          priority
          systemID
          hospitalID
          departmentID
          roleID
          qualID
          date
          month
          year
          startTime
          startAMPM
          endTime
          endAMPM
        }
        eventID
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      type
      createdAt
      updatedAt
      title
      subtitle
      content
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      userID
      otherUserID
      otherUser {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      isReadbyUser
      isReadByOtherUser
      replies {
        items {
          id
          type
          createdAt
          updatedAt
          content
          isRead
          messageID
          userID
        }
        nextToken
      }
      request
      status
      groupID
      group {
        type
        id
        createdAt
        updatedAt
        name
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        title
        subtitle
        content
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
        otherUserID
        otherUser {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        isReadbyUser
        isReadByOtherUser
        replies {
          nextToken
        }
        request
        status
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
        }
      }
      nextToken
    }
  }
`;
export const getMessageReply = /* GraphQL */ `
  query GetMessageReply($id: ID!) {
    getMessageReply(id: $id) {
      id
      type
      createdAt
      updatedAt
      content
      isRead
      messageID
      message {
        id
        type
        createdAt
        updatedAt
        title
        subtitle
        content
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
        otherUserID
        otherUser {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        isReadbyUser
        isReadByOtherUser
        replies {
          nextToken
        }
        request
        status
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
        }
      }
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      userID
    }
  }
`;
export const listMessageReplies = /* GraphQL */ `
  query ListMessageReplies(
    $filter: ModelMessageReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        content
        isRead
        messageID
        message {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          userID
          otherUserID
          isReadbyUser
          isReadByOtherUser
          request
          status
          groupID
        }
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
      }
      nextToken
    }
  }
`;
export const getAnnouncementReply = /* GraphQL */ `
  query GetAnnouncementReply($id: ID!) {
    getAnnouncementReply(id: $id) {
      id
      type
      createdAt
      updatedAt
      content
      isRead
      announcementID
      announcement {
        id
        type
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        title
        accouncement
        notes
        priority
        reactions {
          nextToken
        }
        replies {
          nextToken
        }
        duration
        expire
        category
        link
        shifts {
          nextToken
        }
        sort
      }
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      userID
    }
  }
`;
export const listAnnouncementReplies = /* GraphQL */ `
  query ListAnnouncementReplies(
    $filter: ModelAnnouncementReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncementReplies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        content
        isRead
        announcementID
        announcement {
          id
          type
          createdAt
          updatedAt
          createdByID
          systemID
          hospitalID
          departmentID
          roleID
          title
          accouncement
          notes
          priority
          duration
          expire
          category
          link
          sort
        }
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      type
      id
      createdAt
      updatedAt
      title
      details
      notes
      imageUri
      link
      status
      priority
      systemID
      system {
        type
        id
        createdAt
        updatedAt
        name
        hospitals {
          nextToken
        }
      }
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        departments {
          nextToken
        }
        people {
          nextToken
        }
        streetNum
        streetAddress
        city
        state
        postalCode
        phone
        color
        imageUri
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        members {
          nextToken
        }
        color
        imageUri
      }
      roleID
      role {
        type
        id
        createdAt
        updatedAt
        title
        details
        icon
        color
        imageUri
        acronym
        people {
          nextToken
        }
      }
      qualID
      qual {
        type
        id
        createdAt
        updatedAt
        title
        details
        people {
          nextToken
        }
      }
      date
      month
      year
      startTime
      startAMPM
      endTime
      endAMPM
      reaction {
        items {
          id
          type
          createdAt
          updatedAt
          userID
          reaction
          icon
          announcementID
          eventID
        }
        nextToken
      }
      people {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        title
        details
        notes
        imageUri
        link
        status
        priority
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          details
        }
        date
        month
        year
        startTime
        startAMPM
        endTime
        endAMPM
        reaction {
          nextToken
        }
        people {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      type
      id
      createdAt
      updatedAt
      name
      members {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      color
      imageUri
      messages {
        items {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          userID
          otherUserID
          isReadbyUser
          isReadByOtherUser
          request
          status
          groupID
        }
        nextToken
      }
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        name
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getHospitalUser = /* GraphQL */ `
  query GetHospitalUser($id: ID!) {
    getHospitalUser(id: $id) {
      id
      userID
      hospitalID
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        departments {
          nextToken
        }
        people {
          nextToken
        }
        streetNum
        streetAddress
        city
        state
        postalCode
        phone
        color
        imageUri
      }
      createdAt
      updatedAt
    }
  }
`;
export const listHospitalUsers = /* GraphQL */ `
  query ListHospitalUsers(
    $filter: ModelHospitalUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHospitalUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        hospitalID
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupUser = /* GraphQL */ `
  query GetGroupUser($id: ID!) {
    getGroupUser(id: $id) {
      id
      userID
      groupID
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      group {
        type
        id
        createdAt
        updatedAt
        name
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroupUsers = /* GraphQL */ `
  query ListGroupUsers(
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        groupID
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoleUser = /* GraphQL */ `
  query GetRoleUser($id: ID!) {
    getRoleUser(id: $id) {
      id
      userID
      roleID
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      role {
        type
        id
        createdAt
        updatedAt
        title
        details
        icon
        color
        imageUri
        acronym
        people {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRoleUsers = /* GraphQL */ `
  query ListRoleUsers(
    $filter: ModelRoleUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoleUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        roleID
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQualUser = /* GraphQL */ `
  query GetQualUser($id: ID!) {
    getQualUser(id: $id) {
      id
      userID
      qualID
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      qual {
        type
        id
        createdAt
        updatedAt
        title
        details
        people {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listQualUsers = /* GraphQL */ `
  query ListQualUsers(
    $filter: ModelQualUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQualUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        qualID
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          details
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventUser = /* GraphQL */ `
  query GetEventUser($id: ID!) {
    getEventUser(id: $id) {
      id
      userID
      eventID
      user {
        type
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
        imageUri
        bio
        status
        Setting1
        Setting2
        Setting3
        Setting4
        Setting5
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospital {
          nextToken
        }
        groups {
          nextToken
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        role {
          nextToken
        }
        quals {
          nextToken
        }
        shifts {
          nextToken
        }
        messageSent {
          nextToken
        }
        messageRec {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
      }
      event {
        type
        id
        createdAt
        updatedAt
        title
        details
        notes
        imageUri
        link
        status
        priority
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          details
        }
        date
        month
        year
        startTime
        startAMPM
        endTime
        endAMPM
        reaction {
          nextToken
        }
        people {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEventUsers = /* GraphQL */ `
  query ListEventUsers(
    $filter: ModelEventUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        eventID
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        event {
          type
          id
          createdAt
          updatedAt
          title
          details
          notes
          imageUri
          link
          status
          priority
          systemID
          hospitalID
          departmentID
          roleID
          qualID
          date
          month
          year
          startTime
          startAMPM
          endTime
          endAMPM
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const announcementByDate = /* GraphQL */ `
  query AnnouncementByDate(
    $type: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementByDate(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          hospitalID
          color
          imageUri
        }
        roleID
        role {
          type
          id
          createdAt
          updatedAt
          title
          details
          icon
          color
          imageUri
          acronym
        }
        title
        accouncement
        notes
        priority
        reactions {
          nextToken
        }
        replies {
          nextToken
        }
        duration
        expire
        category
        link
        shifts {
          nextToken
        }
        sort
      }
      nextToken
    }
  }
`;
export const messagesByDate = /* GraphQL */ `
  query MessagesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        title
        subtitle
        content
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
        otherUserID
        otherUser {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        isReadbyUser
        isReadByOtherUser
        replies {
          nextToken
        }
        request
        status
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
        }
      }
      nextToken
    }
  }
`;
export const messagesByUpdatedDate = /* GraphQL */ `
  query MessagesByUpdatedDate(
    $type: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUpdatedDate(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        title
        subtitle
        content
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
        otherUserID
        otherUser {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        isReadbyUser
        isReadByOtherUser
        replies {
          nextToken
        }
        request
        status
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
        }
      }
      nextToken
    }
  }
`;
export const repliesByDate = /* GraphQL */ `
  query RepliesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repliesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        content
        isRead
        messageID
        message {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          userID
          otherUserID
          isReadbyUser
          isReadByOtherUser
          request
          status
          groupID
        }
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
      }
      nextToken
    }
  }
`;
export const announcementRepliesByDate = /* GraphQL */ `
  query AnnouncementRepliesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    AnnouncementRepliesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        content
        isRead
        announcementID
        announcement {
          id
          type
          createdAt
          updatedAt
          createdByID
          systemID
          hospitalID
          departmentID
          roleID
          title
          accouncement
          notes
          priority
          duration
          expire
          category
          link
          sort
        }
        user {
          type
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
          imageUri
          bio
          status
          Setting1
          Setting2
          Setting3
          Setting4
          Setting5
          systemID
          departmentID
        }
        userID
      }
      nextToken
    }
  }
`;
