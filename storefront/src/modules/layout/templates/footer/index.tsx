import FooterNav from "@modules/layout/components/footer-nav"

const Footer = ({categories}:any) => {
  return (
    <footer>
      <FooterNav categories={categories} />
    </footer>
  )
}

export default Footer
