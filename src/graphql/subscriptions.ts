/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      createdOn
      updatedOn
    }
  }
`;
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
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
export const onCreateQual = /* GraphQL */ `
  subscription OnCreateQual {
    onCreateQual {
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
export const onUpdateQual = /* GraphQL */ `
  subscription OnUpdateQual {
    onUpdateQual {
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
export const onDeleteQual = /* GraphQL */ `
  subscription OnDeleteQual {
    onDeleteQual {
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
export const onCreateSystem = /* GraphQL */ `
  subscription OnCreateSystem {
    onCreateSystem {
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
export const onUpdateSystem = /* GraphQL */ `
  subscription OnUpdateSystem {
    onUpdateSystem {
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
export const onDeleteSystem = /* GraphQL */ `
  subscription OnDeleteSystem {
    onDeleteSystem {
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
export const onCreateHospital = /* GraphQL */ `
  subscription OnCreateHospital {
    onCreateHospital {
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
export const onUpdateHospital = /* GraphQL */ `
  subscription OnUpdateHospital {
    onUpdateHospital {
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
export const onDeleteHospital = /* GraphQL */ `
  subscription OnDeleteHospital {
    onDeleteHospital {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
export const onCreateShift = /* GraphQL */ `
  subscription OnCreateShift {
    onCreateShift {
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
export const onUpdateShift = /* GraphQL */ `
  subscription OnUpdateShift {
    onUpdateShift {
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
export const onDeleteShift = /* GraphQL */ `
  subscription OnDeleteShift {
    onDeleteShift {
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
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement {
    onCreateAnnouncement {
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
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement {
    onUpdateAnnouncement {
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
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement {
    onDeleteAnnouncement {
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
export const onCreateReaction = /* GraphQL */ `
  subscription OnCreateReaction {
    onCreateReaction {
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
export const onUpdateReaction = /* GraphQL */ `
  subscription OnUpdateReaction {
    onUpdateReaction {
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
export const onDeleteReaction = /* GraphQL */ `
  subscription OnDeleteReaction {
    onDeleteReaction {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
        createdOn
        updatedOn
      }
      senderID
      receiver {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
        createdOn
        updatedOn
      }
      senderID
      receiver {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
        createdOn
        updatedOn
      }
      senderID
      receiver {
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
export const onCreateMessageReply = /* GraphQL */ `
  subscription OnCreateMessageReply {
    onCreateMessageReply {
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
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateMessageReply = /* GraphQL */ `
  subscription OnUpdateMessageReply {
    onUpdateMessageReply {
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
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteMessageReply = /* GraphQL */ `
  subscription OnDeleteMessageReply {
    onDeleteMessageReply {
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
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
    }
  }
`;
export const onCreateAnnouncementReply = /* GraphQL */ `
  subscription OnCreateAnnouncementReply {
    onCreateAnnouncementReply {
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
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateAnnouncementReply = /* GraphQL */ `
  subscription OnUpdateAnnouncementReply {
    onUpdateAnnouncementReply {
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
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteAnnouncementReply = /* GraphQL */ `
  subscription OnDeleteAnnouncementReply {
    onDeleteAnnouncementReply {
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
        createdOn
        updatedOn
      }
      userID
      createdOn
      updatedOn
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateHospitalUser = /* GraphQL */ `
  subscription OnCreateHospitalUser {
    onCreateHospitalUser {
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
export const onUpdateHospitalUser = /* GraphQL */ `
  subscription OnUpdateHospitalUser {
    onUpdateHospitalUser {
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
export const onDeleteHospitalUser = /* GraphQL */ `
  subscription OnDeleteHospitalUser {
    onDeleteHospitalUser {
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
export const onCreateGroupUser = /* GraphQL */ `
  subscription OnCreateGroupUser {
    onCreateGroupUser {
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
export const onUpdateGroupUser = /* GraphQL */ `
  subscription OnUpdateGroupUser {
    onUpdateGroupUser {
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
export const onDeleteGroupUser = /* GraphQL */ `
  subscription OnDeleteGroupUser {
    onDeleteGroupUser {
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
export const onCreateRoleUser = /* GraphQL */ `
  subscription OnCreateRoleUser {
    onCreateRoleUser {
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
export const onUpdateRoleUser = /* GraphQL */ `
  subscription OnUpdateRoleUser {
    onUpdateRoleUser {
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
export const onDeleteRoleUser = /* GraphQL */ `
  subscription OnDeleteRoleUser {
    onDeleteRoleUser {
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
export const onCreateQualUser = /* GraphQL */ `
  subscription OnCreateQualUser {
    onCreateQualUser {
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
export const onUpdateQualUser = /* GraphQL */ `
  subscription OnUpdateQualUser {
    onUpdateQualUser {
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
export const onDeleteQualUser = /* GraphQL */ `
  subscription OnDeleteQualUser {
    onDeleteQualUser {
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
export const onCreateEventUser = /* GraphQL */ `
  subscription OnCreateEventUser {
    onCreateEventUser {
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
export const onUpdateEventUser = /* GraphQL */ `
  subscription OnUpdateEventUser {
    onUpdateEventUser {
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
export const onDeleteEventUser = /* GraphQL */ `
  subscription OnDeleteEventUser {
    onDeleteEventUser {
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
