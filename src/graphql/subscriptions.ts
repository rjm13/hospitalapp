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
export const onCreateQual = /* GraphQL */ `
  subscription OnCreateQual {
    onCreateQual {
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
export const onUpdateQual = /* GraphQL */ `
  subscription OnUpdateQual {
    onUpdateQual {
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
export const onDeleteQual = /* GraphQL */ `
  subscription OnDeleteQual {
    onDeleteQual {
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
export const onCreateHospital = /* GraphQL */ `
  subscription OnCreateHospital {
    onCreateHospital {
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
export const onUpdateHospital = /* GraphQL */ `
  subscription OnUpdateHospital {
    onUpdateHospital {
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
export const onDeleteHospital = /* GraphQL */ `
  subscription OnDeleteHospital {
    onDeleteHospital {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
