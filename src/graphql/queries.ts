/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      type
      expoNotificationToken
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
      hospID
      hosp {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        departments {
          items {
            id
            name
            abbreviation
          }
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
          qual {
            id
            title
            abbreviation
          }
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      messagesOut {
        items {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      messagesIn {
        items {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
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
      primaryRoleID
      primaryRole {
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      modules {
        items {
          id
          type
          createdAt
          updatedAt
          moduleID
          userID
          completionStatus
          deadline
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
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
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
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
      peeps {
        items {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        nextToken
      }
      quals {
        items {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        nextToken
      }
      activeShifts {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      messages {
        items {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      abbreviation
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
      createdOn
      updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        abbreviation
        details
        people {
          nextToken
        }
        createdOn
        updatedOn
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
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        nextToken
      }
      website
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
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
      abbreviation
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      departments {
        items {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
      roles {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        nextToken
      }
      messages {
        items {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
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
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
      abbreviation
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      roles {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        nextToken
      }
      members {
        items {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
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
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      announcementID
      announcement {
        id
        type
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
      }
      qual {
        type
        id
        createdAt
        updatedAt
        title
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        abbreviation
        details
        people {
          nextToken
        }
        createdOn
        updatedOn
      }
      date
      dateOrder
      month
      year
      startTime
      start
      startAMPM
      endTime
      end
      endAMPM
      payMultiplier
      payRate
      payAddToShift
      payAddToHour
      status
      userID
      user {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      priority
      numNeeded
      trade
      giveUp
      approved
      shiftType
      isStartDayNight
      isEndDayNight
      pickUpNote
      location
      tradeShift {
        type
        id
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        date
        dateOrder
        month
        year
        startTime
        start
        startAMPM
        endTime
        end
        endAMPM
        payMultiplier
        payRate
        payAddToShift
        payAddToHour
        status
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        priority
        numNeeded
        trade
        giveUp
        approved
        shiftType
        isStartDayNight
        isEndDayNight
        pickUpNote
        location
        tradeShift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        tradeShiftID
        createdOn
        updatedOn
      }
      tradeShiftID
      createdOn
      updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        date
        dateOrder
        month
        year
        startTime
        start
        startAMPM
        endTime
        end
        endAMPM
        payMultiplier
        payRate
        payAddToShift
        payAddToHour
        status
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        priority
        numNeeded
        trade
        giveUp
        approved
        shiftType
        isStartDayNight
        isEndDayNight
        pickUpNote
        location
        tradeShift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        tradeShiftID
        createdOn
        updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      title
      announcement
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
          messageID
          createdOn
          updatedOn
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
          createdOn
          updatedOn
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      sort
      date
      startTime
      endTime
      createdOn
      updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
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
        createdOn
        updatedOn
      }
      eventID
      message {
        id
        type
        createdAt
        updatedAt
        title
        subtitle
        content
        messageType
        status
        isReadBySender
        isReadByReceiver
        sender {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        senderID
        receiver {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        receiverID
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        replies {
          nextToken
        }
        reactions {
          nextToken
        }
        otherUserID
        otherUser {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        shiftID
        shift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
      }
      messageID
      createdOn
      updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
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
          createdOn
          updatedOn
        }
        eventID
        message {
          id
          type
          createdAt
          updatedAt
          title
          subtitle
          content
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        messageID
        createdOn
        updatedOn
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
      messageType
      status
      isReadBySender
      isReadByReceiver
      sender {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      senderID
      receiver {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      receiverID
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
        createdOn
        updatedOn
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      hospID
      hosp {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
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
          createdOn
          updatedOn
        }
        nextToken
      }
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
          messageID
          createdOn
          updatedOn
        }
        nextToken
      }
      otherUserID
      otherUser {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      shiftID
      shift {
        type
        id
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        date
        dateOrder
        month
        year
        startTime
        start
        startAMPM
        endTime
        end
        endAMPM
        payMultiplier
        payRate
        payAddToShift
        payAddToHour
        status
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        priority
        numNeeded
        trade
        giveUp
        approved
        shiftType
        isStartDayNight
        isEndDayNight
        pickUpNote
        location
        tradeShift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        tradeShiftID
        createdOn
        updatedOn
      }
      createdOn
      updatedOn
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
        messageType
        status
        isReadBySender
        isReadByReceiver
        sender {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        senderID
        receiver {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        receiverID
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        replies {
          nextToken
        }
        reactions {
          nextToken
        }
        otherUserID
        otherUser {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        shiftID
        shift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
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
        messageType
        status
        isReadBySender
        isReadByReceiver
        sender {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        senderID
        receiver {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        receiverID
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        replies {
          nextToken
        }
        reactions {
          nextToken
        }
        otherUserID
        otherUser {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        shiftID
        shift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
      }
      user {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
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
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        userID
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
      }
      user {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        userID
        createdOn
        updatedOn
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      qualID
      qual {
        type
        id
        createdAt
        updatedAt
        title
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        abbreviation
        details
        people {
          nextToken
        }
        createdOn
        updatedOn
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
          messageID
          createdOn
          updatedOn
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
      createdOn
      updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
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
        createdOn
        updatedOn
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
          messageType
          status
          isReadBySender
          isReadByReceiver
          senderID
          receiverID
          groupID
          systemID
          hospID
          departmentID
          roleID
          otherUserID
          shiftID
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
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
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getModuleUser = /* GraphQL */ `
  query GetModuleUser($id: ID!) {
    getModuleUser(id: $id) {
      id
      type
      createdAt
      updatedAt
      moduleID
      module {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        color
        imageUri
        deadline
        completionPercent
        trainingDates
        location
        notes
        ownerID
        owner {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        users {
          nextToken
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
      }
      userID
      user {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      completionStatus
      deadline
      createdOn
      updatedOn
    }
  }
`;
export const listModuleUsers = /* GraphQL */ `
  query ListModuleUsers(
    $filter: ModelModuleUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModuleUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        moduleID
        module {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          color
          imageUri
          deadline
          completionPercent
          trainingDates
          location
          notes
          ownerID
          systemID
          hospitalID
          departmentID
          roleID
          qualID
          createdOn
          updatedOn
        }
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        completionStatus
        deadline
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getModule = /* GraphQL */ `
  query GetModule($id: ID!) {
    getModule(id: $id) {
      type
      id
      createdAt
      updatedAt
      name
      abbreviation
      color
      imageUri
      deadline
      completionPercent
      trainingDates
      location
      notes
      ownerID
      owner {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      users {
        items {
          id
          type
          createdAt
          updatedAt
          moduleID
          userID
          completionStatus
          deadline
          createdOn
          updatedOn
        }
        nextToken
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
        website
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      hospitalID
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      departmentID
      department {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        shifts {
          nextToken
        }
        roles {
          nextToken
        }
        members {
          nextToken
        }
        color
        imageUri
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
      }
      qualID
      qual {
        type
        id
        createdAt
        updatedAt
        title
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        abbreviation
        details
        people {
          nextToken
        }
        createdOn
        updatedOn
      }
      createdOn
      updatedOn
    }
  }
`;
export const listModules = /* GraphQL */ `
  query ListModules(
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        color
        imageUri
        deadline
        completionPercent
        trainingDates
        location
        notes
        ownerID
        owner {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        users {
          nextToken
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      hospital {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
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
        roles {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
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
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
          createdOn
          updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
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
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
        }
        people {
          nextToken
        }
        peeps {
          nextToken
        }
        quals {
          nextToken
        }
        activeShifts {
          nextToken
        }
        messages {
          nextToken
        }
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      qual {
        type
        id
        createdAt
        updatedAt
        title
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        abbreviation
        details
        people {
          nextToken
        }
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
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
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
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
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          createdOn
          updatedOn
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByPrimaryRole = /* GraphQL */ `
  query UsersByPrimaryRole(
    $primaryRoleID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByPrimaryRole(
      primaryRoleID: $primaryRoleID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        expoNotificationToken
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospital {
          nextToken
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
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
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
        messagesOut {
          nextToken
        }
        messagesIn {
          nextToken
        }
        announcements {
          nextToken
        }
        events {
          nextToken
        }
        primaryRoleID
        primaryRole {
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        modules {
          nextToken
        }
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const shiftsByCreator = /* GraphQL */ `
  query ShiftsByCreator(
    $createdByID: ID!
    $dateOrder: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shiftsByCreator(
      createdByID: $createdByID
      dateOrder: $dateOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        date
        dateOrder
        month
        year
        startTime
        start
        startAMPM
        endTime
        end
        endAMPM
        payMultiplier
        payRate
        payAddToShift
        payAddToHour
        status
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          primaryRole {
            id
            title
            acronym
          }
          createdOn
          updatedOn
        }
        priority
        numNeeded
        trade
        giveUp
        approved
        shiftType
        isStartDayNight
        isEndDayNight
        pickUpNote
        location
        tradeShift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        tradeShiftID
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const shiftsByDepartment = /* GraphQL */ `
  query ShiftsByDepartment(
    $departmentID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shiftsByDepartment(
      departmentID: $departmentID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          primaryRole {
            id
            acronym
            title
          }
          createdOn
          updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        date
        dateOrder
        month
        year
        startTime
        start
        startAMPM
        endTime
        end
        endAMPM
        payMultiplier
        payRate
        payAddToShift
        payAddToHour
        status
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          primaryRole {
            id
            acronym
            title
          }
          createdOn
          updatedOn
        }
        priority
        numNeeded
        trade
        giveUp
        approved
        shiftType
        isStartDayNight
        isEndDayNight
        pickUpNote
        location
        tradeShift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        tradeShiftID
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const shiftsByRole = /* GraphQL */ `
  query ShiftsByRole(
    $roleID: ID!
    $dateOrder: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shiftsByRole(
      roleID: $roleID
      dateOrder: $dateOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        date
        dateOrder
        month
        year
        startTime
        start
        startAMPM
        endTime
        end
        endAMPM
        payMultiplier
        payRate
        payAddToShift
        payAddToHour
        status
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        priority
        numNeeded
        trade
        giveUp
        approved
        shiftType
        isStartDayNight
        isEndDayNight
        pickUpNote
        location
        tradeShift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        tradeShiftID
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const shiftsByUser = /* GraphQL */ `
  query ShiftsByUser(
    $userID: ID!
    $dateOrder: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelShiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    shiftsByUser(
      userID: $userID
      dateOrder: $dateOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        createdAt
        updatedAt
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
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
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        date
        dateOrder
        month
        year
        startTime
        start
        startAMPM
        endTime
        end
        endAMPM
        payMultiplier
        payRate
        payAddToShift
        payAddToHour
        status
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        priority
        numNeeded
        trade
        giveUp
        approved
        shiftType
        isStartDayNight
        isEndDayNight
        pickUpNote
        location
        tradeShift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        tradeShiftID
        createdOn
        updatedOn
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
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const announcementsBySystem = /* GraphQL */ `
  query AnnouncementsBySystem(
    $systemID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsBySystem(
      systemID: $systemID
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
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const announcementsByHospital = /* GraphQL */ `
  query AnnouncementsByHospital(
    $hospitalID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByHospital(
      hospitalID: $hospitalID
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
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const announcementsByDepartment = /* GraphQL */ `
  query AnnouncementsByDepartment(
    $departmentID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByDepartment(
      departmentID: $departmentID
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
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const announcementsByRole = /* GraphQL */ `
  query AnnouncementsByRole(
    $roleID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByRole(
      roleID: $roleID
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
        createdByID
        createdBy {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        title
        announcement
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
        date
        startTime
        endTime
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const messagesByUser = /* GraphQL */ `
  query MessagesByUser(
    $receiverID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUser(
      receiverID: $receiverID
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
        messageType
        status
        isReadBySender
        isReadByReceiver
        sender {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        senderID
        receiver {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        receiverID
        groupID
        group {
          type
          id
          createdAt
          updatedAt
          name
          color
          imageUri
          createdOn
          updatedOn
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospID
        hosp {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        replies {
          nextToken
        }
        reactions {
          nextToken
        }
        otherUserID
        otherUser {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        shiftID
        shift {
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
          dateOrder
          month
          year
          startTime
          start
          startAMPM
          endTime
          end
          endAMPM
          payMultiplier
          payRate
          payAddToShift
          payAddToHour
          status
          userID
          priority
          numNeeded
          trade
          giveUp
          approved
          shiftType
          isStartDayNight
          isEndDayNight
          pickUpNote
          location
          tradeShiftID
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
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
          announcement
          notes
          priority
          duration
          expire
          category
          link
          sort
          date
          startTime
          endTime
          createdOn
          updatedOn
        }
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        userID
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const usersByModle = /* GraphQL */ `
  query UsersByModle(
    $moduleID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelModuleUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByModle(
      moduleID: $moduleID
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
        moduleID
        module {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          color
          imageUri
          deadline
          completionPercent
          trainingDates
          location
          notes
          ownerID
          systemID
          hospitalID
          departmentID
          roleID
          qualID
          createdOn
          updatedOn
        }
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        completionStatus
        deadline
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const modulesByUser = /* GraphQL */ `
  query ModulesByUser(
    $userID: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelModuleUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    modulesByUser(
      userID: $userID
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
        moduleID
        module {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          color
          imageUri
          deadline
          completionPercent
          trainingDates
          location
          notes
          ownerID
          systemID
          hospitalID
          departmentID
          roleID
          qualID
          createdOn
          updatedOn
        }
        userID
        user {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        completionStatus
        deadline
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const modulesByOwner = /* GraphQL */ `
  query ModulesByOwner(
    $ownerID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    modulesByOwner(
      ownerID: $ownerID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        id
        createdAt
        updatedAt
        name
        abbreviation
        color
        imageUri
        deadline
        completionPercent
        trainingDates
        location
        notes
        ownerID
        owner {
          type
          expoNotificationToken
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
          hospID
          departmentID
          primaryRoleID
          createdOn
          updatedOn
        }
        users {
          nextToken
        }
        systemID
        system {
          type
          id
          createdAt
          updatedAt
          name
          website
          imageUri
          createdOn
          updatedOn
        }
        hospitalID
        hospital {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          systemID
          streetNum
          streetAddress
          city
          state
          postalCode
          phone
          color
          imageUri
          createdOn
          updatedOn
        }
        departmentID
        department {
          type
          id
          createdAt
          updatedAt
          name
          abbreviation
          hospitalID
          color
          imageUri
          createdOn
          updatedOn
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
          hospitalID
          departmentID
          createdOn
          updatedOn
        }
        qualID
        qual {
          type
          id
          createdAt
          updatedAt
          title
          roleID
          abbreviation
          details
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
