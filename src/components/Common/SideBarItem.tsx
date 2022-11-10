import { Badge, BadgeProps, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
  title: string;
  path: string;
  active: boolean;
}

const SideBarItem = ({ title, path, active }: Props) => {
  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
      right: 5,
      top: 6,
      backgroundColor: '#00D1FF',
      display: !active ? 'block' : 'none',
    },
  }));

  return (
    <StyledBadge variant="dot">
      <a href={path}>
        <div className="flex xl:flex-col xl:items-center">
          <IconButton aria-label="SideBarItem">
            <img
              width="24"
              height="24"
              src={`/svgs/books_${active ? 'active' : 'inactive'}.svg`}
              alt="Logo"
            />
          </IconButton>
          {active && (
            <div className="hidden text-xs leading-[18px] xl:block">
              {title}
            </div>
          )}
        </div>
      </a>
    </StyledBadge>
  );
};

export default SideBarItem;
