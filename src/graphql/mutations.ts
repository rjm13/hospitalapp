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
      id
      createdAt
      updatedAt
      firstName
      lastName
      phone
      email
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
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
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
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
          id
          createdAt
          updatedAt
          firstName
          lastName
          phone
          email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
        id
        createdAt
        updatedAt
        firstName
        lastName
        phone
        email
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
