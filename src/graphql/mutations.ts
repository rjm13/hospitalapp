/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
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
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
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
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
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
export const createQual = /* GraphQL */ `
  mutation CreateQual(
    $input: CreateQualInput!
    $condition: ModelQualConditionInput
  ) {
    createQual(input: $input, condition: $condition) {
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
export const updateQual = /* GraphQL */ `
  mutation UpdateQual(
    $input: UpdateQualInput!
    $condition: ModelQualConditionInput
  ) {
    updateQual(input: $input, condition: $condition) {
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
export const deleteQual = /* GraphQL */ `
  mutation DeleteQual(
    $input: DeleteQualInput!
    $condition: ModelQualConditionInput
  ) {
    deleteQual(input: $input, condition: $condition) {
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
export const createSystem = /* GraphQL */ `
  mutation CreateSystem(
    $input: CreateSystemInput!
    $condition: ModelSystemConditionInput
  ) {
    createSystem(input: $input, condition: $condition) {
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
export const updateSystem = /* GraphQL */ `
  mutation UpdateSystem(
    $input: UpdateSystemInput!
    $condition: ModelSystemConditionInput
  ) {
    updateSystem(input: $input, condition: $condition) {
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
export const deleteSystem = /* GraphQL */ `
  mutation DeleteSystem(
    $input: DeleteSystemInput!
    $condition: ModelSystemConditionInput
  ) {
    deleteSystem(input: $input, condition: $condition) {
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
export const createHospital = /* GraphQL */ `
  mutation CreateHospital(
    $input: CreateHospitalInput!
    $condition: ModelHospitalConditionInput
  ) {
    createHospital(input: $input, condition: $condition) {
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
export const updateHospital = /* GraphQL */ `
  mutation UpdateHospital(
    $input: UpdateHospitalInput!
    $condition: ModelHospitalConditionInput
  ) {
    updateHospital(input: $input, condition: $condition) {
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
export const deleteHospital = /* GraphQL */ `
  mutation DeleteHospital(
    $input: DeleteHospitalInput!
    $condition: ModelHospitalConditionInput
  ) {
    deleteHospital(input: $input, condition: $condition) {
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
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
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
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
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
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
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
export const createShift = /* GraphQL */ `
  mutation CreateShift(
    $input: CreateShiftInput!
    $condition: ModelShiftConditionInput
  ) {
    createShift(input: $input, condition: $condition) {
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
export const updateShift = /* GraphQL */ `
  mutation UpdateShift(
    $input: UpdateShiftInput!
    $condition: ModelShiftConditionInput
  ) {
    updateShift(input: $input, condition: $condition) {
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
export const deleteShift = /* GraphQL */ `
  mutation DeleteShift(
    $input: DeleteShiftInput!
    $condition: ModelShiftConditionInput
  ) {
    deleteShift(input: $input, condition: $condition) {
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
export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
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
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
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
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
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
export const createReaction = /* GraphQL */ `
  mutation CreateReaction(
    $input: CreateReactionInput!
    $condition: ModelReactionConditionInput
  ) {
    createReaction(input: $input, condition: $condition) {
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
export const updateReaction = /* GraphQL */ `
  mutation UpdateReaction(
    $input: UpdateReactionInput!
    $condition: ModelReactionConditionInput
  ) {
    updateReaction(input: $input, condition: $condition) {
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
export const deleteReaction = /* GraphQL */ `
  mutation DeleteReaction(
    $input: DeleteReactionInput!
    $condition: ModelReactionConditionInput
  ) {
    deleteReaction(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createMessageReply = /* GraphQL */ `
  mutation CreateMessageReply(
    $input: CreateMessageReplyInput!
    $condition: ModelMessageReplyConditionInput
  ) {
    createMessageReply(input: $input, condition: $condition) {
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
export const updateMessageReply = /* GraphQL */ `
  mutation UpdateMessageReply(
    $input: UpdateMessageReplyInput!
    $condition: ModelMessageReplyConditionInput
  ) {
    updateMessageReply(input: $input, condition: $condition) {
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
export const deleteMessageReply = /* GraphQL */ `
  mutation DeleteMessageReply(
    $input: DeleteMessageReplyInput!
    $condition: ModelMessageReplyConditionInput
  ) {
    deleteMessageReply(input: $input, condition: $condition) {
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
export const createAnnouncementReply = /* GraphQL */ `
  mutation CreateAnnouncementReply(
    $input: CreateAnnouncementReplyInput!
    $condition: ModelAnnouncementReplyConditionInput
  ) {
    createAnnouncementReply(input: $input, condition: $condition) {
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
export const updateAnnouncementReply = /* GraphQL */ `
  mutation UpdateAnnouncementReply(
    $input: UpdateAnnouncementReplyInput!
    $condition: ModelAnnouncementReplyConditionInput
  ) {
    updateAnnouncementReply(input: $input, condition: $condition) {
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
export const deleteAnnouncementReply = /* GraphQL */ `
  mutation DeleteAnnouncementReply(
    $input: DeleteAnnouncementReplyInput!
    $condition: ModelAnnouncementReplyConditionInput
  ) {
    deleteAnnouncementReply(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createModuleUser = /* GraphQL */ `
  mutation CreateModuleUser(
    $input: CreateModuleUserInput!
    $condition: ModelModuleUserConditionInput
  ) {
    createModuleUser(input: $input, condition: $condition) {
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
export const updateModuleUser = /* GraphQL */ `
  mutation UpdateModuleUser(
    $input: UpdateModuleUserInput!
    $condition: ModelModuleUserConditionInput
  ) {
    updateModuleUser(input: $input, condition: $condition) {
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
export const deleteModuleUser = /* GraphQL */ `
  mutation DeleteModuleUser(
    $input: DeleteModuleUserInput!
    $condition: ModelModuleUserConditionInput
  ) {
    deleteModuleUser(input: $input, condition: $condition) {
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
export const createModule = /* GraphQL */ `
  mutation CreateModule(
    $input: CreateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    createModule(input: $input, condition: $condition) {
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
export const updateModule = /* GraphQL */ `
  mutation UpdateModule(
    $input: UpdateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    updateModule(input: $input, condition: $condition) {
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
export const deleteModule = /* GraphQL */ `
  mutation DeleteModule(
    $input: DeleteModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    deleteModule(input: $input, condition: $condition) {
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
export const createHospitalUser = /* GraphQL */ `
  mutation CreateHospitalUser(
    $input: CreateHospitalUserInput!
    $condition: ModelHospitalUserConditionInput
  ) {
    createHospitalUser(input: $input, condition: $condition) {
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
export const updateHospitalUser = /* GraphQL */ `
  mutation UpdateHospitalUser(
    $input: UpdateHospitalUserInput!
    $condition: ModelHospitalUserConditionInput
  ) {
    updateHospitalUser(input: $input, condition: $condition) {
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
export const deleteHospitalUser = /* GraphQL */ `
  mutation DeleteHospitalUser(
    $input: DeleteHospitalUserInput!
    $condition: ModelHospitalUserConditionInput
  ) {
    deleteHospitalUser(input: $input, condition: $condition) {
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
export const createGroupUser = /* GraphQL */ `
  mutation CreateGroupUser(
    $input: CreateGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    createGroupUser(input: $input, condition: $condition) {
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
export const updateGroupUser = /* GraphQL */ `
  mutation UpdateGroupUser(
    $input: UpdateGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    updateGroupUser(input: $input, condition: $condition) {
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
export const deleteGroupUser = /* GraphQL */ `
  mutation DeleteGroupUser(
    $input: DeleteGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    deleteGroupUser(input: $input, condition: $condition) {
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
export const createRoleUser = /* GraphQL */ `
  mutation CreateRoleUser(
    $input: CreateRoleUserInput!
    $condition: ModelRoleUserConditionInput
  ) {
    createRoleUser(input: $input, condition: $condition) {
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
export const updateRoleUser = /* GraphQL */ `
  mutation UpdateRoleUser(
    $input: UpdateRoleUserInput!
    $condition: ModelRoleUserConditionInput
  ) {
    updateRoleUser(input: $input, condition: $condition) {
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
export const deleteRoleUser = /* GraphQL */ `
  mutation DeleteRoleUser(
    $input: DeleteRoleUserInput!
    $condition: ModelRoleUserConditionInput
  ) {
    deleteRoleUser(input: $input, condition: $condition) {
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
export const createQualUser = /* GraphQL */ `
  mutation CreateQualUser(
    $input: CreateQualUserInput!
    $condition: ModelQualUserConditionInput
  ) {
    createQualUser(input: $input, condition: $condition) {
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
export const updateQualUser = /* GraphQL */ `
  mutation UpdateQualUser(
    $input: UpdateQualUserInput!
    $condition: ModelQualUserConditionInput
  ) {
    updateQualUser(input: $input, condition: $condition) {
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
export const deleteQualUser = /* GraphQL */ `
  mutation DeleteQualUser(
    $input: DeleteQualUserInput!
    $condition: ModelQualUserConditionInput
  ) {
    deleteQualUser(input: $input, condition: $condition) {
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
export const createEventUser = /* GraphQL */ `
  mutation CreateEventUser(
    $input: CreateEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    createEventUser(input: $input, condition: $condition) {
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
export const updateEventUser = /* GraphQL */ `
  mutation UpdateEventUser(
    $input: UpdateEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    updateEventUser(input: $input, condition: $condition) {
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
export const deleteEventUser = /* GraphQL */ `
  mutation DeleteEventUser(
    $input: DeleteEventUserInput!
    $condition: ModelEventUserConditionInput
  ) {
    deleteEventUser(input: $input, condition: $condition) {
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
