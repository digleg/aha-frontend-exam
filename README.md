# aha-frontend-exam

# Project Structure

width: 1440px height: auto

src
components
SideBar.tsx
// not show width less then 1440px
// desktop: height 100%; display: flex; width: 80px;
// mobile: height 66px; display: flex; flex-direction: column-reverse; word hidden

    SearchWrapper.tsx
    // margin 130px

    Logo.tsx
    // size: 35*15

    Input.tsx
    // width: 100%

    Slider.tsx
    // width: 100%

    Button.tsx

    SquaredButton.tsx
    // width: 343px; height 40px;
    // Animation: hover

    Button.tsx
    // variable: normal
    // Following: 76*28
    // Follow: 60*29
    // Animation: hover

    Gallery.tsx
    // infinite scroll
    GalleryItem.tsx
    Skeleton.tsx

    Profile.tsx
    // Tab - width: 375, height: 100%
    // no margin

    Follow.tsx
    // margin-left / margin-right: 16px;

    FollowItem.tsx
    // margin-bottom: 21px;
    // justify-content: space-between
    Button.tsx
    // variable: outlined & contained

    TagsWrapper.tsx
    TagsItem.tsx

    BackButton.tsx

pages
HomePage.tsx
// includes: SearchWrapper, Tabs
// SearchWrapper with min-width & center
TagsPage.tsx
// includes: TagsWrapper

app.tsx
// includes: SideBar, Routing
index.tsx
